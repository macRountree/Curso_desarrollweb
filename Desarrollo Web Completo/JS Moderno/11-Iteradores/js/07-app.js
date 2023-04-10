/*==============FOR OF ==================== */

const pendientes = ["tarea", "comer", "gym", "Estudiar"];
const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];

//Recorre cada elemento del objeto

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto.nombre);
}
