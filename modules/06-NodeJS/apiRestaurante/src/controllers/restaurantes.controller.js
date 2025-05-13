const Restaurante = require('../models/restaurantes.model');

const getAll = async (req, res) => {
    const { page = 1, limit = 5 } = req.query; // Default values for page and limit
    const restaurantes = await Restaurante.selectAll(Number(page), Number(limit));
    res.json(
        {
            page: Number(page),
            limit: Number(limit),
            total: restaurantes.length,
            data: restaurantes
        }
    );
}

const getById = async (req, res) => {
    const { restauranteID } = req.params;
    const restaurante = await Restaurante.selectById(restauranteID);
    if (!restaurante) {
        return res.status(404).json({ message: 'El ID del restaurante no existe' });
    }
    res.json(restaurante);
}

const create = async (req, res) => {
    const result = await Restaurante.insert(req.body);
    const newRestaurante = await Restaurante.selectById(result.insertId);
    res.json(newRestaurante);
}

module.exports = { getAll, getById,create }