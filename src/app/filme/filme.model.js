const knex = require("../../database/knex");
const Model = require("../../commom/model");
class Filme extends Model {
  constructor() {
    super("filme");
  }

  pesquisarPorTitulo(titulo) {
    return knex.table(this.table).innerJoin('diretor', 'filme.diretor_id', '=', 'diretor.id').where("titulo", "like", `%${titulo}%`);    
  }

  pesquisar() {
    return knex.table(this.table).innerJoin('diretor', 'filme.diretor_id', '=', 'diretor.id');
  }
}
module.exports = new Filme();
