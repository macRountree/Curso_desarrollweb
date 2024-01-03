// !Coersion  es la conversion automatica o implicita de valores dado a otro

const numero1 = 20;

const numero2 = '1';

console.log(numero1 + numero2); //implicita

// Conversion explicita con funcion

console.log(Number(numero2));

console.log(numero1.toString());

// Aplica para arreglos
const pedido = [1, 2, 3, 4];

console.log(pedido.toString());
