const Restaurante = require('../models/restaurantes.model');

const checkRestauranteId = async (req, res, next) => {
    const { restauranteID } = req.params;
    if(isNaN(restauranteID) || restauranteID <= 0) {
        return res.status(400).json({ message: 'El ID del restaurante debe ser un número positivo' });
    }

    const result = await Restaurante.selectById(restauranteID);
    if (!result) {
        return res.status(404).json({ message: 'El ID del restaurante no existe' });
    }

    req.restaurante = result;

    next();
}

module.exports = { checkRestauranteId }