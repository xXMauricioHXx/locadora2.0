const router = require('express').Router();
const Usuario = require('./usuario.model');

router.get('/usuarios', (req, res, next) => {
    Usuario.findAll().then(usuarios => {
        if (usuarios) {
            res.status(200).json(usuarios);
            return next();
        }
        res.send(404);
        return next();
    });
});

module.exports = router;