const knex = require("../../database/knex");
const Model = require("../commom/model");
class Usuario extends Model {
  constructor() {
    super("usuario");
  }
}
module.exports = new Usuario();
