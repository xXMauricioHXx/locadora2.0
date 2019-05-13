const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require('helmet')
 
 

const router = require("./router");
const errorHandle = require("./exceptions/handleError");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet())

app.use(router);
app.use(errorHandle);



module.exports = app;
