const router = require('express').Router();

// Define your routes here
router.use('/products', require('./api/products.routes'));

module.exports = router;