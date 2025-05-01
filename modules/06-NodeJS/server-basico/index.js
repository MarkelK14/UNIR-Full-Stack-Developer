const http = require('node:http');

const server = http.createServer( (req, res) => {
    // console.log(req.method, req.url, req.headers);
    res.end('Respuesta HTTP desde Node.js');
});

server.listen(3000);