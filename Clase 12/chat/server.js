const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

//forma manual de acceder a los archivos de public NO ES NECESARIO SI FUNCIONA CON EL APP.USE()
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


const messages = [
    {
        author: "Alejandro",
        text: "Hola!! que tal?"
    },
    {
        author: "Juan",
        text: "Hola!! Muy bien!"
    },
    {
        author: "Facundo",
        text: "Genial!!!"
    }
];

io.on('connection', socket => {
    console.log('Nuevo Cliente conectado');
    // este evento carga el historial de mensajes cuando un nuevo cliente se conecta
    socket.emit('messages', messages);
    
    socket.on('new-message', data => {
        messages.push(data);
        //Este evento envia un nuevo mensaje a todos los clientes que esten conectados en ese momento
        io.sockets.emit('messages', messages);
    });
});

httpServer.listen(8080, () => {
    console.log('Server is running');
});


