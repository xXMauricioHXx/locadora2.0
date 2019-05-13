module.exports = function AppError(errorObj, httpCode) {  
  console.log(Error.call(this))
  this.trace = Error.call(this);
  this.httpCode = httpCode;
  this.message = errorObj.message;
  this.code = errorObj.code;
};