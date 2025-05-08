const Restaurante = require('../models/restaurantes.model');

const getAll = async (req, res) => {
    const restaurantes = await Restaurante.selectAll();
    res.json(restaurantes);
}

module.exports = { getAll }