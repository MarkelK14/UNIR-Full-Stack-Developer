const Autor = require('../models/autores.model');

const getAll = async (req, res) => {
    const result = await Autor.selectAll()
    res.json(result);
}

const getById = async (req, res) => {
    const { autorId } = req.params;
    if (!autorId) {
        return res.status(400).json({ message: 'El ID del autor es necesario' });
    }
    const autor = await Autor.selectById(autorId);
    if (!autor) {
        return res.status(404).json({ message: 'No existe el autor' });
    }

    const posts = await Autor.selectPostsByAutorId(autorId);
    autor.posts = posts;

    res.json(autor);
}

const createAutor = async (req, res) => {
    const { nombre, email, imagen } = req.body;
    if (!nombre || !email || !imagen) {
        return res.status(400).json({ message: 'Faltan datos obligatorios: nombre, email o imagen' });
    }

    const existeAutor = await Autor.selectByEmail(email);
    if (existeAutor) {
        return res.status(403).json({ message: 'Ya existe un autor con ese email' });
    }

    try {
        const newAutor = await Autor.createAutor(req.body);
        res.json(newAutor);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el autor' });
    }
    
}

module.exports = { getAll,getById, createAutor }