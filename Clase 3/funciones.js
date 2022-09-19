// const funcionUnaSolaLineaEjecucion = (num1, num2) =>(num1 * num2);

// console.log(funcionUnaSolaLineaEjecucion(3,4));

function escribirYLoguear(texto, callbackParaLoguear){
    //Simulacion de escribir un archivo
    console.log(texto);
    //cuando finaliza ejecutar callback
    callbackParaLoguear('archivo procesado con exito');
}

escribirYLoguear('Frase de prueba de callbacks', (mensajeParaLoguear)=> { 
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`);
});