const knex = require("../../database/knex");

class Model {
  constructor(table) {
    this.table = table;
  }
  findAll() {
    return knex.select().from(this.table);
  }

  findWhere(where) {
    return knex
      .select()
      .from(this.table)
      .where(where)
  }

  insert(data) {
    return knex(this.table).insert(data);
  }

  update(where, data) {
    return knex(this.table)
      .where(where)
      .update(data);
  }

  delete(where) {
    return knex(this.table)
      .where(where)
      .del();
  }
}

module.exports = Model;
