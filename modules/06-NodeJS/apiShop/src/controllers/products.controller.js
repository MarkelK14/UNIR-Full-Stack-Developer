const Product = require('../models/products.model')

const getAll = async (req, res) => {
    const products = await Product.find();
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
    // req.body
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