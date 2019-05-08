const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");
const Filme = require("./filme.model");

const alugar = async (req, res, next) => {
  try {
    if (await Filme.disponivel(req.body.filme_id)) {
      const { filme_id, cliente_id, data_entrega } = req.body;
      Filme.alugar(filme_id, cliente_id, data_entrega)
        .then(aluguel => {
          res.json(aluguel);
        })
        .catch(next);
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  alugar
};
