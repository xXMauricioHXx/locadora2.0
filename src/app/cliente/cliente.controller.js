const Cliente = require("./cliente.model");

const insert = (req, res, next) => {
  Cliente.insert(req.body)
    .then(([cliente_id]) => {
      res.status(200).json({ cliente_id });
    })
    .catch(next);
};

const pesquisar = (req, res, next) => {
  Cliente.findAll()
    .then(clientes => res.sendStatus(200).json(clientes))
    .catch(next);
};

module.exports = {
  insert,
  pesquisar
};
