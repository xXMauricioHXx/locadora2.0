const knex = require("../../database/knex");
class Usuario {
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const usuarios = await knex.select().from("usuario");
        resolve(usuarios);
      } catch(err) {
        reject(err)
      }
    });
  }

  findOne(where) {    
    return new Promise(async (resolve, reject) => {
      try {
        knex.select().from("usuario").where(where).then(usuario => resolve(usuario[0]));        
      } catch(err) {
        reject(err);
      }
    });    
  }
}
module.exports = new Usuario();