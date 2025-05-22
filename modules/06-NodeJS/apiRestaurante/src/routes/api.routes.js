const router = require('express').Router();

// Define your routes here
router.use('/restaurantes', require('./api/restaurantes.routes'));
router.use('/usuarios', require('./api/usuarios.routes'));

module.exports = router;