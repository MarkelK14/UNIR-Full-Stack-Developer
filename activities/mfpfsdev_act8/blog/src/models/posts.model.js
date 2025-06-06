const db = require('../config/db.config');

const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM POSTS');
    return result;
}

const selectAutorById = async (id) => {
    const [result] = await db.query('SELECT * FROM AUTORES WHERE id = ?', [id]);
    return result.length > 0 ? result[0] : null;
}

const selectAutorByEmail = async (email) => {
    const [result] = await db.query('SELECT * FROM AUTORES WHERE email = ?', [email]);
    return result.length > 0 ? result[0] : null;
}

const createPost = async ({titulo, descripcion, categoria, autor_id}) => {
    const [result] = await db.query('INSERT INTO POSTS (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)', [titulo, descripcion, categoria, autor_id]);
    return { id: result.insertId, titulo, descripcion, categoria, autor_id };
}

module.exports = {
    selectAll,
    selectAutorById,
    selectAutorByEmail,
    createPost
};