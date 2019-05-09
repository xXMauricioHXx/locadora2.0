const Model = require('../commom/model');

class Filme extends Model {
  constructor() {
    super('filme');
  }
}
module.exports = new Filme();
