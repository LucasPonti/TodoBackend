const personas = [//esto es un arreglo de objetos
    {
        nombre: 'Lucas',
        edad: 30
    },
    {
        nombre: 'Fernando',
        edad: 24,
    },
    {
        nombre: 'Facundo',
        edad: 28
    }
];

//generar un arreglo solo de nombres de las personas
//FORMA LARGA
// const regresarNombre = (persona) => {
//     return persona.nombre;
// }

// const nombres = personas.map(regresarNombre);
// console.log(nombres);

//FORMA CORTA
const nombres = personas.map(persona => persona.nombre);
console.log(nombres);

