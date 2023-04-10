//FOREACH
//son iteradores que se usan en JS mas seguido que los iteradores clasics
//va a ejecutarse por lo menos 1 vez por cada vez que haya elementos en el recorrido

const pendientes = ["tarea", "comer", "gym", "Estudiar"];
//esta diseñado para recorrer arrays
//el segundo parametro va a mostrar el indice de cada pendiente
// pendientes.forEach((pendiente, i) => console.log(`${i} ${pendiente}`));

const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];

const newArray = carrito.forEach((producto) => producto.nombre);

const newArray2 = carrito.map((producto) => producto.nombre);

console.log(newArray); //el forEach no muestra un nuevo arreglo
console.log(newArray2); // map si muestra un nuevo arreglo
