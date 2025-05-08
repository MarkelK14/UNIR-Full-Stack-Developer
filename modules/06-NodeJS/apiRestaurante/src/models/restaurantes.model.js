const db = require ('../config/db');

// SELECT * FROM restaurante
const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM restaurante'); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

module.exports = {
    selectAll
}