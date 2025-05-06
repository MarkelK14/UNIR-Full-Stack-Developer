// --> /api/tareas
const { getAll } = require('../../controllers/tareas.controller');

// Import the router from express
const router = require('express').Router();

router.get('/', getAll);

module.exports = router;