const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//comprobar si un valor existe en una rray
// meses.forEach((mes) => {
//   if (mes === "Enero") {
//     console.log("Enero si existe");
//   }
// });

//includes retorna un booleano si existe o no el mes en arreglo
//NO SIRVE EN arreglo de objetos
// const resultado = meses.includes("diciembre");

// console.log(resultado);

//En un arreglo de objetos se utiliza some tambien regresa un boleano
const existe = carrito.some((producto) => {
  return producto.nombre === "Si";
});

console.log(existe);

//Some tambien funciona con arreglo tradicional

const existe2 = meses.some((mes) => mes === "Febrero");

console.log(existe2);
