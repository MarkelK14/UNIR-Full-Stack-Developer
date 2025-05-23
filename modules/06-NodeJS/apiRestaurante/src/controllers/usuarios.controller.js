const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios.model');

const registro = async (req, res) => {
    req.body.password =  bcrypt.hashSync(req.body.password, 8); // Hash the password
    const result = await Usuario.insert(req.body);
    const usuario = await Usuario.getById(result.insertId);
    res.json(usuario);
}

const login = async (req, res) => {
    // req.body = { email, password }
    const { email, password } = req.body;
    // Existe el email en la base de datos?
    const usuario = await Usuario.getByEmail(email);
    if (!usuario) {
        return res.status(401).json({ message: 'Error en email y/o password' });
    }
    // Coinciden las passwords?
    const passwordIsValid = bcrypt.compareSync(password, usuario.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: 'Error en email y/o password' });
    }
    return res.json({ 
        message: 'Login correcto',
        token: jwt.sign({
            usuario_id: usuario.id, role: usuario.role
        }, 'clave_secreta')
    });
}

const perfil = (req, res) => {
    res.json(req.user); // req.user es el usuario que viene del middleware
}

module.exports = { registro, login, perfil }