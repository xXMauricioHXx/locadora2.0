module.exports = function AppError(errorObj, httpCode) {    
  this.httpCode = httpCode;
  this.message = errorObj.message;
  this.code = errorObj.code;
};