const Model = require("../commom/model");
class Cliente extends Model {
  constructor() {
    super("cliente");
  }
}

module.exports = new Cliente();
