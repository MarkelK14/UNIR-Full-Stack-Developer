const db = require('../config/db.config');

const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM AUTORES');
    return result;
}

const selectById = async (id) => {
    const [result] = await db.query('SELECT * FROM AUTORES WHERE id = ?', [id]);
    return result.length > 0 ? result[0] : null;
}

const selectByEmail = async (email) => {
    const [result] = await db.query('SELECT * FROM AUTORES WHERE email = ?', [email]);
    return result.length > 0 ? result[0] : null;
}

const selectPostsByAutorId = async (autorId) => {
    const [result] = await db.query('SELECT * FROM POSTS WHERE autor_id = ?', [autorId]);
    return result;
}

const createAutor = async ({nombre, email, imagen}) => {
    const [result] = await db.query('INSERT INTO AUTORES (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
    return { id: result.insertId, nombre, email, imagen };
}

module.exports = {
    selectAll,
    selectById,
    selectByEmail,
    selectPostsByAutorId,
    createAutor
};