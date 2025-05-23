const router = require('express').Router();

const { checkToken } = require('../middlewares/auth.middlewares');

router.use('/restaurantes', checkToken, require('./api/restaurantes.routes'));
router.use('/usuarios', require('./api/usuarios.routes'));

module.exports = router;