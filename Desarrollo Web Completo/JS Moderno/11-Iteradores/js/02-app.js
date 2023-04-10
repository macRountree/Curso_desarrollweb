//crea un foor loop que al detectar el elemento 5 detenga su ciclo
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Cinco");
//     continue;
//     //Continue ejecuta la linea pero no corta el for loop como el break
//     //Break corta el for loop
//   }
//   console.log(`numero ${i}`);
// }

const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true, descuento: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];
//queremos decirle al usuario que uno de los productos delcarrito tiene %

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(` El articulo${carrito[i].nombre} tiene descuento`);
  }
  console.log(carrito[i]);
}
