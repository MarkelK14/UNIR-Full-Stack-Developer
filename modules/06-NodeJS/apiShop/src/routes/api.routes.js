const router = require('express').Router();

// Define your routes here
router.use('/products', require('./api/products.routes'));
router.use('/users', require('./api/users.routes'));

module.exports = router;