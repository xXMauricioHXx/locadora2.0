const router = require("express").Router();
const FilmeController = require("./filme.controller");

router.post("/filme-alugar", FilmeController.alugar);
router.get("/filmes", FilmeController.pesquisar)
module.exports = router;
