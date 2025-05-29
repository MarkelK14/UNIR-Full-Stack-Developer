const router = require('express').Router();

const { register, login, addToCart, profile } = require('../../controllers/users.controller');
const { checkToken } = require('../../middlewares/auth.middlewares');

router.get('/me', checkToken, profile);

router.post('/register', register);
router.post('/login', login);

router.patch('/addCart', checkToken, addToCart);

module.exports = router;