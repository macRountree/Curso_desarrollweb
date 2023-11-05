// ITERADORES NUEVOS EN JS

//

const ciudades = ['Londres', ' New York', 'Paris'];

const ordenes = new Set([123, 124, 150, 131, 150]);

const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'desarrollador Web');

// ?=======================Entries imprime llave y valor de nuestro arreglo
for (let entry of ciudades.entries()) {
  //   console.log(entry);
}

//!  Recordar que Set es solo para valores  y devolvera llave valor iguales
for (let entry of ordenes.entries()) {
  //   console.log(entry);
}

for (let entry of datos.entries()) {
  //   console.log(entry);
}

// ? ======================VALUES ITERATOR       RETORNA SOLO EL VALORR

for (let value of ciudades.values()) {
  //   console.log(value);
}
for (let value of ordenes.values()) {
  //   console.log(value);
}
for (let value of datos.values()) {
  //   console.log(value);
}

// ?=========================KEYS        Retorna SOLO LA LLAVEEE

for (let key of ciudades.keys()) {
  //   console.log(key);
}
console.log('-----------------');

for (let key of ordenes.keys()) {
  //   console.log(key);
}
console.log('-----------------');

for (let key of datos.keys()) {
  //   console.log(key);
}

console.log('-----------------');

// ! iteradores por Default

for (const ciudad of ciudades) {
  console.log(ciudad);
}
for (const orden of ordenes) {
  console.log(orden);
}
for (const dato of datos) {
  console.log(dato);
}
