// --> /api/contactos
const { getAll, getById, create, edit } = require('../../controllers/contactos.controller');

// Import the router from express
const router = require('express').Router();

router.get('/', getAll);
router.get('/:contactoId', getById); // :id is a route parameter
router.post('/', create);
router.put('/', edit);

// Export the router
module.exports = router;