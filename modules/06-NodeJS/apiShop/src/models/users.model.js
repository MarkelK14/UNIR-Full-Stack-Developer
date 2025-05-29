const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'moderator', 'regular'],
        default: 'regular' // Default role is 'regular'
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'product', // Reference to the cart model
    }]
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false, // Disables the __v field
});

const User = model('user', userSchema);

module.exports = User;