const router = require('express').Router();

const { checkToken } = require('../middlewares/auth.middlewares');

router.use('/products', checkToken, require('./api/products.routes'));
router.use('/users', require('./api/users.routes'));

module.exports = router;