const router = require('express').Router();
const usuariorRouter = require('./app/usuario/usuario.router');
const filmeRouter = require('./app/filme/filme.router');

router.use('/v1', usuariorRouter);
router.use('/v1', filmeRouter);

module.exports = router;