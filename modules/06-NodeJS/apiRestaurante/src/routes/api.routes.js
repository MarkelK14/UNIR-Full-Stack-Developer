const router = require('express').Router();

// Define your routes here
router.use('/restaurantes', require('./api/restaurantes.routes'));

module.exports = router;