const router = require('express').Router();

const { getAll } = require('../../controllers/students.controller');

router.get('/', getAll);

module.exports = router;