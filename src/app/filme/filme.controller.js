const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");

const Filme = require("./filme.model");
const FilmeCliente = require("../filmeCliente/filmeCliente.model");
const Cliente = require('../cliente/cliente.model');

const alugar = async (req, res, next) => {
  try {
    const filme_id = req.body.filme_id;
    const cliente_id = req.body.cliente_id;

    const [filme, cliente] = await Promise.all([Filme.findWhere({ id: filme_id }), Cliente.findWhere({ id: cliente_id })]);
    if (!filme.length) {
      throw new AppError(ExceptionsContants.FILME_NAO_CADASTRADO_NO_SISTEMA, 404);
    }

    if (!cliente.length) {
      throw new AppError(ExceptionsContants.CLIENTE_NAO_CADASTRADO_NO_SISTEMA, 404);
    }
   
    await Promise.all([Filme.update( {id: filme_id }, { numero_total_copias: filme[0].numero_total_copias - 1 }), FilmeCliente.insert(req.body)]);

    res.sendStatus(204);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  alugar
};
