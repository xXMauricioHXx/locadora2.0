const router = require('express').Router();
const usuariorRouter = require('./app/usuario/usuario.router');
const filmeRouter = require('./app/filme/filme.router');
const clienteRouter = require('./app/cliente/cliente.router');

router.use('/v1', usuariorRouter); 
router.use('/v1', filmeRouter);
router.use('/v1', clienteRouter);

module.exports = router;