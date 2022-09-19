const Contenedor = require('./desafio2');

async function main(){
    const product = new Contenedor('productos');
    const contador = 1;

    //CARGANDO PRODUCTOS
    await product.save({titulo: 'Ventilador', precio: '$12000', id: 1});
    await product.save({titulo: 'Heladera', precio: '$41000', id: 2});
    await product.save({titulo: 'Microondas', precio: '$18000', id: 3});
    //MOSTRAR TODOS LOS PRODUCTOS
    console.log('Muestro todos los productos');
    let todosProductos = await product.getAll();
    console.log(JSON.stringify(todosProductos));
    //BUSCAR PRODUCTO POR ID
    const idABuscar = 2;
    console.log('Muestro por Id');
    let idProduct = await product.getById(idABuscar);
    console.log(idProduct);
    //ELIMINAR PRODUCTO POR ID
    await product.deleteById(1);
    console.log('Despues de eliminar por id');
    let productosFiltrados = await product.getAll();
    console.log(JSON.stringify(productosFiltrados));
    //ELIMINAR TODOS LOS PRODUCTOS
    // await product.deleteAll();
}

main();