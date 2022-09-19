import * as operaciones from './lib/operaciones';

const num1: number = 10, num2:number = 4;

console.log(`la suma de ${num1} + ${num2} es ${operaciones.sumar(num1, num2)}`)
console.log(`la resta de ${num1} - ${num2} es ${operaciones.restar(num1, num2)}`)
console.log(`la multiplicacion de ${num1} * ${num2} es ${operaciones.multiplicar(num1, num2)}`)
console.log(`la division de ${num1} / ${num2} es ${operaciones.dividir(num1, num2)}`)