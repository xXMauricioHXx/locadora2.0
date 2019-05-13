const knex = require('../../database/knex');

const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");

const Filme = require("./filme.model");
const Aluguel = require("../aluguel/aluguel.model");
const Cliente = require("../cliente/cliente.model");

const pesquisar = async (req, res, next) => {
  try {
    const { titulo } = req.query;
    const filme = titulo
      ? await Filme.pesquisarPorTitulo(titulo)
      : await Filme.pesquisar();
    res.status(200).json(filme);
  } catch (exception) {
    return next(exception);
  }
};

const alugar = (req, res, next) => {
  knex.transaction(async trx => {
    const { filme_id, cliente_id, numero_copias, data_entrega } = req.body;

    const [filme, cliente] = await Promise.all([
      Filme.findWhere({ id: filme_id }),
      Cliente.findWhere({ id: cliente_id })
    ]);

    if (!filme.length) {
      throw new AppError(
        ExceptionsContants.ERROR_FILME_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }

    if (filme[0].copias_disponiveis < numero_copias) {
      throw new AppError(
        ExceptionsContants.ERROR_FILME_NUMERO_DE_COPIAS_INSUFICIENTE,
        404
      );
    }

    if (!cliente.length) {
      throw new AppError(
        ExceptionsContants.ERROR_CLIENTE_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }
    await Filme.update(
      { id: filme_id },
      { copias_disponiveis: filme[0].copias_disponiveis - numero_copias }
    )
      .transacting(trx)
      .then(() => Aluguel.insert({ filme_id, cliente_id, data_entrega }))
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

const devolver = async (req, res, next) => {
  knex.transaction(async trx => {
    const { filme_id, cliente_id, numero_copias } = req.body;

    const [filme, cliente, aluguel] = await Promise.all([
      Filme.findWhere({ id: filme_id }),
      Cliente.findWhere({ id: cliente_id }),
      Aluguel.findWhere({filme_id, cliente_id})
    ]);

    if (!filme.length) {
      throw new AppError(
        ExceptionsContants.FILME_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }

    if (!aluguel.length) {
      throw new AppError(
        ExceptionsContants.ERROR_ALUGUEL_NAO_ENCONTRADO,
        404
      );
    }

    if (!cliente.length) {
      throw new AppError(
        ExceptionsContants.CLIENTE_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }

    return Filme.update(
      { id: filme_id },
      { copias_disponiveis: filme[0].copias_disponiveis + numero_copias }
    )
      .transacting(trx)
      .then(() => Aluguel.removerAluguel(cliente_id, filme_id))
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next);
};

module.exports = {
  alugar,
  pesquisar,
  devolver
};
