const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const User = require('../models/users.model');

const profile = async (req, res) => {
    res.json(req.user);
}

const register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);

    const newUser = await User.create(req.body);
    res.json(newUser);
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Invalid username and/or password' });
    }
    const equals = bcrypt.compareSync(password, user.password);
    if (!equals) {
        return res.status(401).json({ message: 'Invalid username and/or password' });
    }
    res.json({
        token: jwt.sign({
            user_id: user._id,
            exp: dayjs().add(15, 'minutes').unix() // It's called exp so that the token expiration is handled automatically
        }, "firma super secreta")
    });
}

const addToCart = async (req, res) => {
    const { productId } = req.body;
    req.user.cart.push(req.body.productId);
    await req.user.save();

    res.json({ message: "Producto añadido al carrito" });

    
}

module.exports = { profile, register, login, addToCart }