const router = require('express').Router();

const { getAll, create, edit, remove } = require('../../controllers/students.controller');

router.get('/', getAll);

router.post('/', create);

router.put('/:studentId', edit);

router.delete('/:studentId', remove);

module.exports = router;