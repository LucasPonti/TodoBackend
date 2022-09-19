function mostrarLetras(palabra){
    for(let i=0; i< palabra.length; i++){
        console.log(palabra[i])
    }
    fin();
}

const fin = () => console.log('termine');

console.log('Inicio');
setTimeout(mostrarLetras, 0, 'Hola');
setTimeout(mostrarLetras, 250, 'Hola');
setTimeout(mostrarLetras, 500, 'Hola');