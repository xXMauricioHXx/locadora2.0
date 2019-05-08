const knex = require("../../database/knex");

class Model {
  constructor(table) {
    this.table = table;
  }
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await knex.select().from(this.table);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  findWhere(where) {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await knex
            .select()
            .from(this.table)
            .where(where)
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = Model;
