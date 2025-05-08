const getAll = (req, res) => {
    // console.log(req)
    res.send('Recupera todos los contactos');
}

const getById = (req, res) => {
    console.log(req.params);
    const { contactoId } = req.params; // contactoId = 1

    if (isNaN(contactoId)) {
        return res.status(400).send('El id no es numérico');
    }

    res.send(`Recupera el contacto con id ${contactoId}`);
}

const create = (req, res) => {
    console.log(req.body); // nombre, email, telefono
    const {nombre, email, telefono} = req.body;
    res.send(`Se crea un nuevo contacto con nombre ${nombre}`);
}

const edit = (req, res) => {
    res.send('Se actualiza el contacto');
}

module.exports = {
    getAll,
    getById,
    create,
    edit
}