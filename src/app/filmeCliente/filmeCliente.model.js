const Model = require('../commom/model');

class FilmeCliente extends Model {
  constructor() {
    super('filme_cliente');
  }
}
module.exports = new FilmeCliente();
