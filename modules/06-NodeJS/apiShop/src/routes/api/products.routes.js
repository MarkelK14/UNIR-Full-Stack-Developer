const { getAll, create, edit, remove, getByDepartment } = require('../../controllers/products.controller');

const router = require('express').Router();

router.get('/', getAll);
router.get('/dept/:department', getByDepartment);
router.post('/', create);
router.put('/:productId', edit);
router.delete('/:productId', remove);

module.exports = router;