// Partial y Currynh

// Curryn ee dividir una function que tiene mas de 1 parametro

const suma = (a, b, c) => a + b + c;

const partial = a => (b, c) => suma(a, b, c);

// Dividimos una funcion con 3 parametros ..
const primerNum = partial(5);
const resultado = primerNum(4, 5);

console.log(resultado);

console.log(suma(1, 2, 3));
