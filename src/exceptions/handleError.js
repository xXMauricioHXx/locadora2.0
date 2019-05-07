function HandleError(err, req, res, next)
{   
    this.error = {    
        error: {           
            message: err.message,
            code: err.code,
            name: err.name || "AppError"
        }
    }
    switch(err.name) {    
        case 'AuthenticationError':
            res.status(401).json(this.error)
            next(err)
        break
    } 
    res.status(404).json(error)
    next(err);
}

module.exports = HandleError;