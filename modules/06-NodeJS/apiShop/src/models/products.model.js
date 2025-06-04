const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    department: String,
    available: Boolean,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user' // Reference to the user model
    },
    image: String
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false, // Disables the __v field
    toJSON: {
        virtuals: true, // Include virtuals in JSON output
    },
});

// Statics
productSchema.statics.actives = function() {
    return this.model('product').find({
        available: true,
        stock: { $gte: 10 }
    });
};

// Virtuals
productSchema.virtual('priceTaxes').get(function() {
    return Math.round(this.price * 1.21); // Assuming a tax rate of 21%
});

const Product = model('product', productSchema);

module.exports = Product;