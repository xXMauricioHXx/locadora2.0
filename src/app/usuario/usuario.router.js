const router = require("express").Router();
const UsuarioController = require("./usuario.controller");

router.post("/login", UsuarioController.login);

module.exports = router;
