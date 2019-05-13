const log4js = require("log4js");
log4js.configure({
  appenders: { errors: { type: "file", filename: "errors.log" } },
  categories: { default: { appenders: ["errors"], level: "error" } }
});

function HandleError(err, req, res, next) {
  const logger = log4js.getLogger("errors");
  if (err.hasOwnProperty("sqlMessage")) {
    err.httpCode = 400;
    this.error = {
      error: {
        message: err.sqlMessage,
        code: err.code,
        name: err.name      }
    };
  } else {   
    this.error = {
      error: {
        message: err.message,
        code: err.code,
        name: err.name || "AppError"
      }
    };
  }
  
  logger.error(`${this.error.error.message}`);
  res.status(err.httpCode || 500).json(error);
  next(err);
}

module.exports = HandleError;
