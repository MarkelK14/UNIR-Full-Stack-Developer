const { getAll, createAutor, getById } = require('../../controllers/autores.controller');

const router = require('express').Router();

router.get('/', getAll);
router.get('/:autorId', getById);

router.post('/create', createAutor); 

module.exports = router;