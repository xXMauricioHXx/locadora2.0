const Cliente = require("./cliente.model");

const insert = (req, res, next) => {
  Cliente.insert(req.body)
    .then(([cliente_id]) => {
      res.status(200).json({cliente_id});
    })
    .catch(next);
};

module.exports = {
  insert
}