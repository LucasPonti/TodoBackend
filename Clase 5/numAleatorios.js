const obj = {};

function numerosRandom(){
for(let i = 0; i< 100; i++){
    let randomNumber = Math.ceil(Math.random()*20);
    obj[randomNumber] ? obj[randomNumber]++: obj[randomNumber] = 1
}
}

numerosRandom();
console.log(obj);