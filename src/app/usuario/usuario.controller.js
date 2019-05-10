const jwt = require("jsonwebtoken");

const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");
const Usuario = require("./usuario.model");

const login = async (req, res, next) => {
  try {
    const usuario = await Usuario.findWhere(req.body);
    if (!usuario || !usuario.length) {
      throw new AppError(
        ExceptionsContants.ERROR_USUARIO_SEM_PERMISSAO_DE_ACESSO,
        401
      );
    }
    const token = jwt.sign(
      { email: usuario[0].email },
      process.env.JWT_SECRET,
      {
        expiresIn: 8240
      }
    );
    res.status(200).json({ token: token });
    return next();
  } catch (exception) {
    return next(exception);
  }
};

module.exports = {
  login
};
