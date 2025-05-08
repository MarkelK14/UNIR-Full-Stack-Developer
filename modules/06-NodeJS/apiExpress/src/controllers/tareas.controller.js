const getAll = (req, res) => {
    res.send('Recupera todas las tareas');
}

const getByPrioridad = (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Destructuring con valores por defecto
    res.send(`Recupera las tareas por prioridad PAGE ${page} LIMIT ${limit}`);
}

module.exports = {
    getAll,
    getByPrioridad
}