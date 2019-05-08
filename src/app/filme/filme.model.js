const knex = require("../../database/knex");
const Model = require('../commom/model');

class Filme extends Model {
  constructor(){
    super('filme');
  }

  disponivel(id) {
    return knex(this.table).count().where('numero_total_copias', '>', 0).andWhere('id', id);
  }

  alugar(filme_id, cliente_id, data_entrega) {
    return knex('filme_cliente').insert([{ filme_id, cliente_id, data_entrega}]);
  }
}
module.exports = new Filme();
