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
  nombre: "Lenovo",
  precio: 100,
};
//Forma declarativa esta relacionada con la programacion funcional
//En este caso utilizamos el spread y rest para pasar los elementos del objeto producto
// al arreglo de carrito ... pero no cambia su estado si llamamos al a consola seguira vacio el arreglo
let resultado;

//Esto es parecido al push
resultado = [...carrito, producto];

resultado = [...resultado, producto2];
//Esto es parecido al unshift
resultado = [producto3, ...resultado];
console.table(resultado);
