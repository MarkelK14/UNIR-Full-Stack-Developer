// --> /api/contactos
const { getAll, create } = require('../../controllers/contactos.controller');

// Import the router from express
const router = require('express').Router();

router.get('/', getAll);
router.post('/', create);

// Export the router
module.exports = router;