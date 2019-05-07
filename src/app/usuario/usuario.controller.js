const jwt = require("jsonwebtoken");

const AppError = require("../../exceptions/appError");
const ExceptionsContants = require("../../exceptions/exceptionsContants");
const Usuario = require("./usuario.model");

const login = async (req, res, next) => {
  try {
    const usuarioLogado = await Usuario.findOne(req.body);
    if (!usuarioLogado) {
      throw new AppError(
        ExceptionsContants.USUARIO_SEM_PERMISSAO_DE_ACESSO,
        401
      );
    }
    const token = jwt.sign(
      { email: usuarioLogado.email },
      process.env.JWT_SECRET || "a@6T6N#vv54/21pWtGz33",
      {
        expiresIn: 8240
      }
    );
    res.status(200).json({ token: token });
    return next();
  } catch(err){
    return next(err);
  }
};

module.exports = {
  login
};
