const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");

const Filme = require("./filme.model");
const Aluguel = require("../aluguel/aluguel.model");
const Cliente = require("../cliente/cliente.model");

const pesquisar = async (req, res, next) => {
  try {
    const { titulo } = req.query;
    const filme = titulo
      ? await Filme.procurarPorTitulo(titulo)
      : await Filme.findAll();
    res.status(200).json(filme);
  } catch (exception) {
    return next(exception);
  }
};

const alugar = async (req, res, next) => {
  try {
    const { filme_id, cliente_id } = req.body.filme_id;

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

    if (!filme[0].numero_total_copias) {
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
    if (req.body.alugar) {
      await Promise.all([
        Filme.update(
          { id: filme_id },
          { numero_total_copias: filme[0].numero_total_copias - 1 }
        ),
        Aluguel.insert(req.body)
      ]);
    }

    res.sendStatus(204);
  } catch (exception) {
    return next(exception);
  }
};

const devolver = async (req, res, next) => {
  try {
    const { filme_id, cliente_id } = req.body.filme_id;

    const [filme, cliente] = await Promise.all([
      Filme.findWhere({ id: filme_id }),
      Cliente.findWhere({ id: cliente_id })
    ]);
    if (!filme.length) {
      throw new AppError(
        ExceptionsContants.FILME_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }

    if (!cliente.length) {
      throw new AppError(
        ExceptionsContants.CLIENTE_NAO_CADASTRADO_NO_SISTEMA,
        404
      );
    }

    await Promise.all([
      Filme.update(
        { id: filme_id },
        { numero_total_copias: filme[0].numero_total_copias + 1 }
      ),
      Aluguel.removerAluguel(cliente_id, filme_id)
    ]);
  } catch (exception) {
    return next(exception);
  }
};

module.exports = {
  alugar,
  pesquisar,
  devolver
};
