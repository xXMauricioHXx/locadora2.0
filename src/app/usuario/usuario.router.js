const router = require("express").Router();
const UsuarioController = require("./usuario.controller");

router.get("/usuarios", (req, res, next) => {
  Usuario.findAll().then(usuarios => {
    if (usuarios) {
      res.status(200).json(usuarios);
      return next();
    }
    res.send(404);
    return next();
  });
});

router.post("/login", UsuarioController.login);

module.exports = router;
