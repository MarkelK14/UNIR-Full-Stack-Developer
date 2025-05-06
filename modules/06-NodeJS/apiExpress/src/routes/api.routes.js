// Import the router from express
const router = require('express').Router();

router.use('/contactos', require('./api/contactos.routes'));
router.use('/tareas', require('./api/tareas.routes'));

// Export the router
module.exports = router;