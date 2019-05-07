const knex = require("../../database/knex");
class Usuario {
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const usuarios = await knex.select().from("usuario");
        resolve(usuarios);
      } catch(err) {
        console.error(err);
        reject(err)
      }
    });
  }

  login(usuario) {    
    return new Promise(async (resolve, reject) => {
      try {
        const usuarioLogado = await knex.select().from("usuario").where({
          email: usuario.email,
          senha: usuario.senha
        });

        if (!usuarioLogado) {
          throw new AppError(
            ExceptionsContants.USUARIO_NAO_CADASTRADO_NO_SISTEMA,
            404
          );
        }
      } catch(err) {
        reject(err);
      }
    });    
  }
}

module.exports = new Usuario();
