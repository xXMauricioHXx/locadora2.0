const log4js = require('log4js');
log4js.configure({
  appenders: { errors: { type: 'file', filename: 'errors.log' } },
  categories: { default: { appenders: ['errors'], level: 'error' } }
});

function HandleError(err, req, res, next) {
  const logger = log4js.getLogger('errors');
  console.log(err);
  logger.trace(err.trace);
  logger.error(`${err.message} - ${err.trace}`);
  this.error = {
    error: {
      message: err.message,
      code: err.code,
      name: err.name || "AppError"
    }
  };
  res.status(err.httpCode || 500).json(error);

  next(err);
}

module.exports = HandleError;
