const router = require("express").Router();

const ClienteController = require("./cliente.controller");
const Auth = require("../../middlewares/auth");

router.post("/clientes", [Auth.verify, ClienteController.insert]);
router.get("/clientes", [Auth.verify, ClienteController.pesquisar]);
module.exports = router;
