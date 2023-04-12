const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//Meses 2 no modifica el arreglo original
//Si hacemos un spread(...) en 'agosto' creara un arreglo por lenght
const meses2 = [...meses, "Agosto"];

console.log(meses2);

const producto = { nombre: "HDD", precio: 300 };

//no podemos poner spread en producto porque no se pueden iterar objetos
const carrito2 = [...carrito, producto];
console.log(carrito2);
