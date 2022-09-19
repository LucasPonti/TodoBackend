// const delay =  ret => {for(let i=0; i<ret*3e6; i++);}

// function hacerTarea(num){
//     console.log(`Haciendo Tarea ${num}`);
//     delay(1000);
// }

// console.log('Inicio Tarea');
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log('Fin de las tareas');
// console.log('Otras tareas');

function hacerTarea(num, cb){
    console.log(`Haciendo Tarea ${num}`);
    setTimeout(cb, 2000);
}

console.log('inicio de tareas');
hacerTarea(1, ()=> {
    hacerTarea(2,()=> {
        hacerTarea(3, ()=>{
            hacerTarea(4,()=>{
                console.log('Fin de tareas');
            })
        })
    })
})

console.log('Otras tareas...')