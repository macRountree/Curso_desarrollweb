// Pure Function o Funciones Puras

// Son funciones que retornan un dato pero no modifican el valor ..con una entrada de datos deben de retornan la misma cantidad de datos que reciben la entrada
//

const duplicar = numero => numero * 2;

const numer1 = 20;

const resultado = duplicar(numer1);

console.log(resultado);
console.log(numer1); // Este NUNCA SE DEBe modificar
