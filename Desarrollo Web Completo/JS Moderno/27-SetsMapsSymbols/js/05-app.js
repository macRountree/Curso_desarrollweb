// Symbols
/* No hay 2 symbols */

// ! Los Symbols nunca son iguales

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
  //   console.log('iguales');
} else {
  //   console.log('diferentes');
}

const nombre = Symbol();
const apellido = Symbol();
const persona = {};

// agregamos nombre apeelidop

persona[nombre] = 'Mac';
persona[apellido] = 'R';
persona.tipoCliente = 'premuium';
persona.saldo = 500;

// console.log(persona);
console.log(persona[nombre]); //!Si nos deja acceder a la s propiedades

// Las propiedades  que utilizan un symbol NO son iterable

for (let i in persona) {
  //   console.log(i);
}

// Describir el simbol

const nombreCliente = Symbol('Nombre');
console.log(nombreCliente);
const cliente = {};
cliente[nombreCliente] = 'charles';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
