const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer)

const mensajes = [];

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Nuevo cliente conectadoe');

    socket.emit('mensajes', mensajes);

    socket.on('mensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data})
        io.sockets.emit('mensajes', mensajes);
    })
    
});

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
    console.log('server runing');
});

connectedServer.on('error', error => console.log(`Error en el servidor ${error}`));