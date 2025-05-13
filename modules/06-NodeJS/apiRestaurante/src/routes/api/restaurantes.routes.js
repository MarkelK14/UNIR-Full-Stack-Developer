const { getAll, getById, create } = require('../../controllers/restaurantes.controller');

const router = require('express').Router();

// GET /api/restaurantes
router.get('/', getAll);
router.get('/:restauranteID', getById);
router.post('/', create);

module.exports = router;