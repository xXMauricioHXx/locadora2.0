const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "db4free.net",
    user: "admin_locadora",
    password: "78b7015d",
    database: "locadora"
  }
});

module.exports = knex;
