const fs = require('node:fs');

const Product = require('../models/products.model')

const getAll = async (req, res) => {
    const products = await Product.find().populate('owner', '-_id username email'); // Populate the owner field with username and email, excluding _id
    res.json(products);
}

const getByDepartment = async (req, res) => {
    const { department } = req.params;
    const products = await Product.find({ 
        department // department : department
    });
    res.json(products);
}

const getByPrice = async (req, res) => {
    const { minPrice, maxPrice } = req.params;
    const products = await Product.find({ 
        price: { 
            $gte: minPrice, // greater than or equal to minPrice
            $lte: maxPrice  // less than or equal to maxPrice
        }
    });
    res.json(products);
}

const getActives = async (req, res) => {
    const products = await Product.actives();
    res.json(products);
}

const create = async (req, res) => {
    // Guardar la imagen en el servidor
    const extension = req.file.mimetype.split('/')[1]; // Get the file extension from the mimetype
    const newName = `${req.file.filename}.${extension}`; // Create a new name for the file
    fs.renameSync(req.file.path, `./public/${newName}`); // Rename the file to the new name

    // req.body
    req.body.image = newName;
    req.body.owner = req.user._id; // Set the owner to the authenticated user
    const product = await Product.create(req.body);
    res.json(product);
}

const edit = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.json(product);
}

const remove = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    res.json(product);
}



module.exports = { getAll, getByDepartment, getByPrice, getActives, create, edit, remove }