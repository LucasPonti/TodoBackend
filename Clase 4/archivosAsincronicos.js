const fs = require('fs');

fs.readFile('./Clase 4//test.txt', 'utf8', (error, contenido)=>{
    if(error){
        throw new Error('Error de Lectura')
    } 
    console.log('Lectura exitosa');
    console.log(contenido);
})

fs.writeFile('./Clase 4/testWrite.txt', 'Texto de escritura nuevo', (error)=>{
    if(error){
        throw new Error('Error de escritura')
    } 
    console.log('Escritura exitosa');
    
})

//creacion de un nuevo directorio
// fs.mkdir('./Clase 4/Carpeta Nueva', error => {
//     if (error) {
//         throw new Error('Error de creacion de directorio');
//     }
//     console.log('Directorio Creado');
// })

fs.readdir('./Clase 4',(error, nombres) => {
    if (error) {
        throw new Error('Error de lectura de directorio');
    }
    console.log(nombres);
})