const knex = require("../../database/knex");
const Model = require("../../commom/model");
class Filme extends Model {
  constructor() {
    super("filme");
  }

  procurarPorTitulo(titulo) {
    return knex(this.table).rightJoin('diretor', function() {
     this.on("diretor.id", "=", "filme.diretor_id") 
    }).where("titulo", "like", `%${titulo}%`);
  }

  pesquisar() {
    return knex.select('*').from(this.table).rightJoin('diretor', function() {
      this.on('diretor.id', "=", "filme.diretor_id")
    })
  }
}
module.exports = new Filme();
