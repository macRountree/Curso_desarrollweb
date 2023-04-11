const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, i) => {
  if (mes === "Abril") {
  }
});

//Encontrar indice abril si retorna un -1 entonces NO lo en
const index = meses.findIndex((mes) => mes === "Abril");

console.log(index);

const index2 = carrito.findIndex((producto) => producto.precio === 700);
console.log(index2);
