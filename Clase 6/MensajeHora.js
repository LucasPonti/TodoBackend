const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    const  hora = new Date().getHours();
    if(hora >= 6 & hora <= 12){
        respuesta.end('Buenos dias')
    } else if(hora >= 13 & hora <= 19){
        respuesta.end('Buenas tardes')
    } else {
        respuesta.end('Buenas noches')
    }
   console.log(hora); 
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`);
})
