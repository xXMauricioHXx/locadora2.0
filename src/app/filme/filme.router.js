const router = require("express").Router();
const FilmeController = require("./filme.controller");

router.post("/filme-alugar", FilmeController.alugar);

module.exports = router;
