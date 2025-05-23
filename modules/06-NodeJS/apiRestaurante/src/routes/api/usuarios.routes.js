const router = require('express').Router();

const { registro, login, perfil } = require('../../controllers/usuarios.controller');
const { checkToken } = require('../../middlewares/auth.middlewares');

router.get('/perfil', checkToken, perfil);

router.post('/registro', registro);
router.post('/login', login);

module.exports = router;