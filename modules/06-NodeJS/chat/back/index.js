const http = require('node:http');
const socketIO = require('socket.io');

require('dotenv').config();

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
    CONNECTION: 'connection'
}

io.on(events.CONNECTION, (socket) => {
    console.log('New client connected');
});