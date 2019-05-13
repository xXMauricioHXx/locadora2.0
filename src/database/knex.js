const config = require('./config');
const knex = require("knex")({
  client: 'mysql2',
  connection: config
});

module.exports = knex;
