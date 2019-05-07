function HandleError(err, req, res, next) {
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
