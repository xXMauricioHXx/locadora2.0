const knex = require("../../database/knex");
const Model = require('../commom/model');

class Aluguel extends Model {
  constructor() {
    super('aluguel');
  }

  removerAluguel(cliente_id, filme_id) {
    return knex(this.table)
    .where('cliente_id', cliente_id)
    .andWhere('filme_id', filme_id)
    .del();
  }
}
module.exports = new Aluguel();
