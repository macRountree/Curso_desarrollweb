const boolean1 = true;
const boolean = false;
const boolean3 = "true";
console.log(boolean);
console.log(boolean1);
console.log(boolean == boolean3); //en este caso los boolean no seran iguales en igualdad no estricta

const bool3 = new Boolean(true);

console.log(typeof bool3); //crea objetos NO valores primitivos
