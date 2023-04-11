const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//USO DE EVERY

const resultado = carrito.every((producto) => producto.precio < 500);
console.log(resultado);

//En un every se deben cumplir todas las condiciones.. en este caso como celular vale 700 retorna false
// En .some al menos una condicion se debe cumplir es el contrario de  every
