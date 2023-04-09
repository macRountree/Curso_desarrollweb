const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];

//Metodo para iterar arreglos .. se comporta igual que eel for de arriba
const array = carrito.forEach(function (producto) {
  return `${producto.nombre}  - Precio : ${producto.precio}`;
});

//Iterar arreglos con map

//La diferencia es que map llena una variable cno un arreglo nuev

const array2 = carrito.map(function (producto) {
  return `${producto.nombre}  - Precio : ${producto.precio}`;
});

//.map crea un nuevo arreglo y .foreach no
console.log(array);
console.log(array2);
