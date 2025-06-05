const {model, Schema} = require('mongoose');

const messageSchema = new Schema({
    socketId: String,
    username: String,
    message: String,
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    versionKey: false // Disable the __v field
});

const ChatMessage = model('chat_message', messageSchema);

module.exports = ChatMessage;