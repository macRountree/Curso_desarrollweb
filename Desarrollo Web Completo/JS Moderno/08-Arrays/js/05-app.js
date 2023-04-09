const carrito = [];

//Los arreglos pueden tener objetos

//Definimos un producto

const producto = {
  nombre: "Samsung",
  precio: 400,
};
const producto2 = {
  nombre: "Dell",
  precio: 500,
};

carrito.push(producto, producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 200,
};
//la forma imperativa
carrito.unshift(producto3);
console.table(carrito);
