const { getAll, createPost } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAll);

router.post('/create', createPost); 

module.exports = router;