const router = require('express').Router();
const usuariorRouter = require('./app/usuario/usuario.router');

router.get('/', (req, res, next) => {
    res.json({ message: "Hello World" });
});

router.use('/v1', usuariorRouter);
module.exports = router;