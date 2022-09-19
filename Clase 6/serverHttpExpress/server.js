const express = require('express');

const app = express();

let visitas = 0;

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
} )

app.get('/visitas', (req, res) => {
    visitas+= 1;
    res.send({mensaje: `La cantidad de visitas es ${visitas}`});
} )

app.get('/fyh', (req, res) => {
    const fecha = new Date().toLocaleString();
    res.send({mensaje: `La fecha es ${fecha}`});
} )

const server = app.listen(8080, () => {
    console.log (`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en el servidor ${error}`));

