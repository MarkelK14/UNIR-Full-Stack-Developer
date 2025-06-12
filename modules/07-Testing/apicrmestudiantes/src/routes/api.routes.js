const router = require('express').Router();

router.use('/students', require('./api/students.routes'));

module.exports = router;