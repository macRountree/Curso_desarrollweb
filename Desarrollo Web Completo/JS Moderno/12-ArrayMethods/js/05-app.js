const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//for each

let resultado = "";

carrito.forEach((producto, i) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[i];
  }
});

console.log(resultado);

// el uso del FIND Obetener o asignar al resultado el primer elemento que cumpla la condicion 'Tablet

const resultado2 = carrito.find((producto) => producto.nombre === "Tablet");
console.log(resultado2);
