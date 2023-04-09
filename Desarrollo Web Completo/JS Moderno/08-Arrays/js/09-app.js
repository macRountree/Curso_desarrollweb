const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre}  - Precio : ${carrito[i].precio}`);
}

//Metodo para iterar arreglos .. se comporta igual que eel for de arriba
carrito.forEach(function (producto) {
  console.log(`${producto.nombre}  - Precio : ${producto.precio}`);
});
