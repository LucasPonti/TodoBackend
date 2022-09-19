const variable1 = process.argv[2];
const variable2 = process.argv[3];

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplicacion(variable1,variable2));