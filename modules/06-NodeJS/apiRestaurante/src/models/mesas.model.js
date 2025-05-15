const db = require ('../config/db');

const selectByRestauranteId = async (restauranteID) => {
    const [result] = await db.query('SELECT * FROM mesa WHERE id_restaurante = ?', [restauranteID]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result;
}

module.exports = {
    selectByRestauranteId
}