const pendientes = ["tarea", "comer", "gym", "Estudiar"];

//for of itera para arreglos
for (let pendiente of pendientes) {
  console.log(pendiente);
}
const carrito = {
  nombre: "monitor",
  precio: 100,
  disponible: true,
};

//for in itera sobre objetos
for (let producto in carrito) {
  console.log(`${carrito[producto]}`);
}

for (let [llave, valor] of Object.entries(carrito)) {
  console.log(valor);
  console.log(llave);
}
