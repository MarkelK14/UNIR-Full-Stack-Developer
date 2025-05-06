const getAll = (req, res) => {
    res.send('Recupera todos los contactos');
}

const create = (req, res) => {
    res.send('Se crea un nuevo contacto');
}

module.exports = {
    getAll,
    create
}