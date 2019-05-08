const router = require("express").Router();
const FilmeController = require("./filme.controller");

router.post("/alugar", FilmeController.alugar);

module.exports = router;
