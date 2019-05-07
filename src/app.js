const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./router');
const errorHandle = require('./exceptions/handleError');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandle);

module.exports = app;