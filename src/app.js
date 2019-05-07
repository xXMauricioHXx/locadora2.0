const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

module.exports = app;