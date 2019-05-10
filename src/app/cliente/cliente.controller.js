const Cliente = require("./cliente.model");

const insert = (req, res, next) => {
  Cliente.insert(req.body)
    .then(cliente => {
      res.status(200).json(cliente);
    })
    .catch(next);
};

module.exports = {
  insert
}