const db = require ('../config/db');

const getById = async (usuarioId) => {
    const [result] = await db.query(
        'SELECT * FROM usuario WHERE id = ?',
        [usuarioId],
    );
    if (result.length === 0) return null;
    return result[0];
}

const getByEmail = async (email) => {
    const [result] = await db.query(
        'SELECT * FROM usuario WHERE email = ?',
        [email]
    );
    if (result.length === 0) return null;
    return result[0];
}

const insert = async ({username, email, password}) => {
    const [result] = await db.query(
        'INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)',
        [username, email, password]
    );
    return result;
}

module.exports = {
    insert,
    getById,
    getByEmail
}