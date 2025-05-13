const db = require ('../config/db');

// SELECT * FROM restaurante
const selectAll = async (page, limit) => {
    // const [result] = await db.query('SELECT * FROM restaurante'); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    const [result] = await db.query(`
        SELECT *
        FROM restaurante
        LIMIT ? OFFSET ?
        `, [limit, (page - 1) * limit]); // Execute the query with limit and offset for pagination
    return result; // Return the result of the query
}

// SELECT * FROM restaurante WHERE idRestaurante = ?
/**
 * Obtiene un restaurante por su ID desde la base de datos.
 *
 * @async
 * @function
 * @param {number|string} restauranteId - El ID del restaurante que se quiere buscar.
 * @returns {Promise<Object|null>} Un objeto con los datos del restaurante si existe, o `null` si no se encuentra.
 */
const selectById = async (idRestaurante) => {
    const [result] = await db.query('SELECT * FROM restaurante WHERE id = ?', [idRestaurante]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    if (result.length === 0) return null; // If the result is empty, return null
    return result[0]; // Return the first element of the result
}

const insert = async ({nombre, direccion, tipo_cocina, telefono, valoracion, capacidad}) => {
    const [result] = await db.query(`
        INSERT INTO restaurante (nombre, direccion, tipo_cocina, telefono, valoracion, capacidad, fecha_creacion)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [nombre, direccion, tipo_cocina, telefono, valoracion, capacidad, new Date()]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

module.exports = {
    selectAll,
    selectById,
    insert
}