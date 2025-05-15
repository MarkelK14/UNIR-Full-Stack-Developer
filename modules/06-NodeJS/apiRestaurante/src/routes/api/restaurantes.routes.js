const { getAll, getById, create, edit, remove, getAllAndMesas } = require('../../controllers/restaurantes.controller');
const { checkRestauranteId } = require('../../middlewares/restaurantes.middlewares');

const router = require('express').Router();

// SELECT
router.get('/', getAll); // GET /api/restaurantes
router.get('/mesas', getAllAndMesas); // GET /api/restaurantes/mesas
router.get('/:restauranteID', checkRestauranteId, getById); // GET /api/restaurantes/:restauranteID

// INSERT
router.post('/', create); // POST /api/restaurantes

// UPDATE
router.put('/:restauranteID', checkRestauranteId, edit); // PUT /api/restaurantes/:restauranteID

// DELETE
router.delete('/:restauranteID', checkRestauranteId, remove); // DELETE /api/restaurantes/:restauranteID

module.exports = router;