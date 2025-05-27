const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    department: String,
    available: Boolean
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false // Disables the __v field
});

const Product = model('product', productSchema);

module.exports = Product;