const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//FILTER permite hacer muchas operaciones n nuestro carrito

let resultado;
//En este caso muestra los productos con precio de mayor a 400

resultado = carrito.filter((producto) => producto.precio > 400);
resultado = carrito.filter((producto) => producto.precio < 600);
//Aqui filtra todos menos el producto audifonos
resultado = carrito.filter((producto) => producto.nombre != "Audifonos");
resultado = carrito.filter((producto) => producto.nombre === "Audifonos");

console.log(resultado);
