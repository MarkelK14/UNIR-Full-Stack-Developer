const http = require('node:http');
const socketIO = require('socket.io');
const ChatMessage = require('./models/chatMessage.model');

require('dotenv').config();

require('./config/db');

const server = http.createServer((req, res) => {
    res.end('Respuesta');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

// Server Socket
const io = socketIO(server, {
    cors: {
        origin: '*' // Allow all origins
    }
});

const events = {
    CONNECTION: 'connection',
    DISCONNECT: 'disconnect',
    CHAT_MESSAGE_CLIENT: 'chat_message_client',
    CHAT_MESSAGE_SERVER: 'chat_message_server',
    CLIENTS_COUNT: 'clients_count',
    CHAT_INIT: 'chat_init'
}

io.on(events.CONNECTION, async (socket) => {
    console.log('New client connected');
    socket.broadcast.emit(events.CHAT_MESSAGE_SERVER, {
        username: 'INFO',
        message: 'A new user has joined the chat!'
    });

    // Enviar al cliente el número de clientes conectados
    io.emit(events.CLIENTS_COUNT, io.engine.clientsCount); // Get the number of connected clients

    // Enviar al socket que se conecta los 5 últimos mensajes
    const messages = await ChatMessage.find().sort('-createdAt').limit(5);
    socket.emit(events.CHAT_INIT, messages.reverse()); // Send the last 5 messages to the newly connected client


    socket.on(events.CHAT_MESSAGE_CLIENT, (data) => {
        ChatMessage.create(data);
        // console.log('Received message:', data);
        io.emit(events.CHAT_MESSAGE_SERVER, data); // Broadcast the message to all connected clients
    });

    // Escuchar desconexión de este socket
    socket.on(events.DISCONNECT, () => {
        console.log('Client disconnected');
        io.emit(events.CHAT_MESSAGE_SERVER, {
            username: 'INFO',
            message: 'A user has left the chat!'
        });
        io.emit(events.CLIENTS_COUNT, io.engine.clientsCount); // Get the number of connected clients
    });
});