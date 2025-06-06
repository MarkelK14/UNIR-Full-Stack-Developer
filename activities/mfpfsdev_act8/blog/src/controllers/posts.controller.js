const Post = require('../models/posts.model');

const getAll = async (req, res) => {
    const result = await Post.selectAll()

    for (const post of result) {
        const autor = await Post.selectAutorById(post.autor_id);
        post.autor = {nombre: autor.nombre, email: autor.email, imagen: autor.imagen};
    }

    res.json(result);
}

const createPost = async (req, res) => {
    const { titulo, descripcion, categoria, email } = req.body;
    if (!titulo || !descripcion || !categoria || !email) {
        return res.status(400).json({ message: 'Faltan datos obligatorios: titulo, descripcion, categoria o email' });
    }

    const autor = await Post.selectAutorByEmail(email);
    if (!autor) {
        return res.status(403).json({ message: 'No existe un autor con ese email' });
    }

    req.body.autor_id = autor.id;

    try {
        const newPost = await Post.createPost(req.body, autor.id);
        res.json(newPost);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el post' });
    }
}

module.exports = { getAll, createPost }