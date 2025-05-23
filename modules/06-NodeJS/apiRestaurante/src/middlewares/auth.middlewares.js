const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios.model');

const checkToken = async (req, res, next) => {
    // Viene incluido el token en la cabecera Authorization?
    if(!req.headers['authorization']) {
        return res.status(403).json({ message: 'Es necesaria la cabecera Authorization' });
    }

    const token = req.headers['authorization'];
    // Es correcrto el token?
    let payload
    try {
        payload = jwt.verify(token, 'clave_secreta'); // usuario_id, role, iat
    } catch (error) {
        return res.status(403).json({ message: 'El token es incorrecto' });
    }

    // Existe el usuario?
    const usuario = await Usuario.getById(payload.usuario_id);
    if(!usuario) {
        return res.status(403).json({ message: 'El usuario no existe' });
    }

    req.user = usuario;

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403)
            .json({
                message: 'Solo puedes acceder si eres "admin"'
            });
    }
    next();
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: `Solo pueden pasar los usuarios con role ${role}` });
        }
        next();
    }
}

module.exports = { checkToken, checkAdmin, checkRole };