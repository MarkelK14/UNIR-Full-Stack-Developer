const Restaurante = require('../models/restaurantes.model');
const Mesa = require('../models/mesas.model');

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
    // const { restauranteID } = req.params;
    // const restaurante = await Restaurante.selectById(restauranteID);
    // if (!restaurante) {
    //     return res.status(404).json({ message: 'El ID del restaurante no existe' });
    // }
    // res.json(restaurante);
    res.json(req.restaurante); // Utilizando el middleware checkRestauranteId, porque ya lo hemos obtenido al validarlo
}

const getAllAndMesas = async (req, res) => {
    const restaurantes = await Restaurante.selectAll(1, 20);

    for(let restaurante of restaurantes) {
        const mesas = await Mesa.selectByRestauranteId(restaurante.id);
        restaurante.mesas = mesas;
    }

    res.json(restaurantes);
}

const create = async (req, res) => {
    const result = await Restaurante.insert(req.body);
    const newRestaurante = await Restaurante.selectById(result.insertId);
    res.json(newRestaurante);
}

const edit = async (req, res) => {
    const { restauranteID } = req.params;
    const result = await Restaurante.updateById(restauranteID, req.body);
    const restaurante = await Restaurante.selectById(restauranteID);
    res.json(restaurante);
}

const remove = async (req, res) => {
    const { restauranteID } = req.params;
    // const resturante = await Restaurante.selectById(restauranteID);
    await Restaurante.deleteById(restauranteID);
    // res.json(resturante);
    res.json(req.restaurante); // Utilizando el middleware checkRestauranteId, porque ya lo hemos obtenido al validarlo
}

module.exports = { getAll, getById, getAllAndMesas, create, edit, remove }