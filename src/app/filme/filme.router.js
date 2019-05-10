const router = require("express").Router();

const FilmeController = require("./filme.controller");
const Auth = require("../../middlewares/auth");

router.post("/filme-alugar", [Auth.verify, FilmeController.alugar]);
router.get("/filmes", [Auth.verify, FilmeController.pesquisar]);
module.exports = router;
