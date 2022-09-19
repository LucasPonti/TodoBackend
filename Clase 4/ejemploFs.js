const fs = require('fs');

const data = fs.readFileSync('./test.txt', 'utf8');

//LEER UN ARCHIVO DE TEXTO EXISTENTE
// function mostrarLineas(palabra){
//     for(let i=0; i<palabra.length; i++){
//         console.log(palabra[i]);
//     }
// }
// mostrarLineas(data);


//CREAR ARCHIVO DE TEXTO
fs.writeFileSync('./testWrite.txt', 'Esto es una prueba de escritura');

//AGREGAR ELEMENTOS A UN ARCHIVO DE TEXTO
function escribir(){
    for(let i=0; i<100; i++ ){
        fs.appendFileSync('./testWrite.txt',`\nescribiendo ${i}`);
    }
}
escribir();

//ELIMINAR ARCHIVOS DE TEXTO
fs.unlinkSync('./testWrite.txt');


