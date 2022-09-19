const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

function returnNames(productos){
    const products = productos.map(prod => prod.nombre);
    return products.join(', ');
}

function totalPrize(productos){
    let acumulador = 0;
    for (const producto of productos){
       acumulador += producto.precio; 
    }
    return acumulador;
}

function promedio(){
    let acumulado = totalPrize(productos);
    acumulado = acumulado / productos.length;
    return acumulado;
}

function getProductMinPrice(productos){
    if (productos.length === 0){
        throw new Error('No se puede calcular el minimo de un arreglo vacio');
    }
    
    let min = productos[0].precio;
    let prod = productos[0];
    
    for (const producto of productos){
        if(producto.precio < min) {
            min = producto.precio;
            prod = producto;
        }
    }

    return prod;

}

function getProductMaxPrice(productos){
    if (productos.length === 0){
        throw new Error('No se puede calcular el maximo de un arreglo vacio');
    }
    
    let max = productos[0].precio;
    let prod = productos[0];
    
    for (const producto of productos){
        if(producto.precio > max) {
            max = producto.precio;
            prod = producto;
        }
    }

    return prod;

}

console.log('Los nombres son: '+returnNames(productos));
console.log('Total de los productos: '+totalPrize(productos));
console.log('Promedio: '+ promedio(productos));
console.log('Menor precio: ' + getProductMinPrice(productos));
console.log('Mayor precio: ' + getProductMaxPrice(productos));