const carrito = [
  { nombre: 'Monitor 20 pulgadas', precio: 500 },
  { nombre: 'Monitor 50 pulgadas', precio: 520 },
  { nombre: 'tablets', precio: 600 },
  { nombre: 'Audifonos..', precio: 1000 },
  { nombre: 'celular', precio: 300 },
  { nombre: 'lapto', precio: 800 },
];

// higher order function es una function que toma o retorna una funcion como argumento

const resultado = carrito.filter(producto => {
  return producto.precio > 400;
});

// console.lo
console.log(resultado);

//  El higer order function se haria de la siiguiente forma .
// Toma una funcion y retorna un funcion como argumento
// Se crea un nuevo arreglo NO SE MODIFICA EL ARREGLO ROIGINAL
const mayor400 = producto => {
  return producto.precio > 400;
};

const resultadoOrder = carrito.filter(mayor400);

console.log(resultadoOrder);
