const { getAll, create, edit, remove, getByDepartment, getByPrice, getActives } = require('../../controllers/products.controller');
const { validateSchema } = require('../../middlewares/validation.middlewares');
const productSchema = require('../../schemas/products.schema');

const router = require('express').Router();

router.get('/', getAll);
router.get('/dept/:department', getByDepartment);
router.get('/price/min/:minPrice/max/:maxPrice', getByPrice);
router.get('/actives', getActives);

router.post('/', validateSchema(productSchema), create);
router.put('/:productId', edit);
router.delete('/:productId', remove);

module.exports = router;