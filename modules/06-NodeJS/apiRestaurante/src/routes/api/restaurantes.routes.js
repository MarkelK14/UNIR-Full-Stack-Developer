const { getAll } = require('../../controllers/restaurantes.controller');

const router = require('express').Router();

// GET /api/restaurantes
router.get('/', getAll);

module.exports = router;