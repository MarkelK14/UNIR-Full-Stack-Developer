const jwt = require('jsonwebtoken');

const Usuario = require('../models/users.model');

const checkToken = async (req, res, next) => {
    // Mirar si la cabecera existe
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'Necesitas la cabecera Authorization' });
    }

    const token = req.headers.authorization;

    // Comprobamos si el token es correcto
    let payload
    try {
        payload = jwt.verify(token, 'firma super secreta'); // usuario_id, role, iat
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }

    // Comprobamos si existe el usuario
    const user = await Usuario.findById(payload.user_id).populate('cart', 'name price'); // Populate cart with product details
    if(!user) {
        return res.status(403).json({ message: 'El usuario no existe' });
    }

    req.user = user;

    next();
};

module.exports = { checkToken };