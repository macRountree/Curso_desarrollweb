const carrito = [];

const producto = {
  nombre: "Samsung",
  precio: 400,
};

const producto2 = {
  nombre: "dell",
  precio: 600,
};
const producto3 = {
  nombre: "Compac",
  precio: 600,
};
carrito.unshift(producto3, producto2, producto);

//Elimina ultimo elemento de un arreglo
//En los objetos era delete

// carrito.pop();

// //Elimina el primer elemento del arreglo
// carrito.shift();

//Eliminar el elemento de enmedio

// toma 2 parametros el primero es la posicion
//y el segundo es cuantos elementos queremos eliminar
carrito.splice(2, 1);

console.table(carrito);
