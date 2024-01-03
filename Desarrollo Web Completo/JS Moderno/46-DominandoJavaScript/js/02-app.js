// ! HOISTING es un termino de JS para referirse de como funcionan los contextos
// Hay una fase de creacion y otra de ejecucion

// Creacion  de variables y
// Ejecucion se ejecuta

// Js primero registra las funciones y despues  las ejecuta

function obtenerCliente(nombre) {
  console.log(`Cliente- Nombre ${nombre}`);
}

obtenerCliente('Mac');

// ESTA sintaxis NO funciona se tiene que ejecutar despues del const
obtenerCliente1('SEX');
const obtenerCliente1;
obtenerCliente1 = function(nombre)  {
  console.log(`Cliente- Nombre ${nombre}`);
};


