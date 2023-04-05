const numero5 = "20";
const numero4 = "20.2";
const numero3 = "uno";
const numero2 = 20;
const numero1 = "20";

console.log(numero5);
console.log(Number.parseInt(numero5));
console.log(Number.parseFloat(numero4));
console.log(Number.parseInt(numero3)); //arrojaNaN en consola osea Not a number

//revisar si un numero es entero

console.log(Number.isInteger(numero2)); //arroja True
console.log(Number.isInteger(numero1)); //arroja false
