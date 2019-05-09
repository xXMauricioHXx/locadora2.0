const knex = require("../../database/knex");
const Model = require("../commom/model");
class Filme extends Model {
  constructor() {
    super("filme");
  }

  procurarPorTitulo(titulo) {
    return knex(this.table).where("titulo", "like", `%${titulo}%`);
  }
}
module.exports = new Filme();
