// --> /api/tareas
const { getAll, getByPrioridad } = require('../../controllers/tareas.controller');

// Import the router from express
const router = require('express').Router();

router.get('/', getAll);
router.get('/prioridad', getByPrioridad);

module.exports = router;