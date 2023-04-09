const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,

  //llave :  valor
};

//extraemos el valor del nombre y lo declaramos en nueva variable nombre
// const nombre = producto.nombre;
// console.log(nombre);

// ES 6 nos permite hacer lo mismo en una linea haciendo destructuracion de objets
const { nombre, precio, disponible } = producto;

console.log(nombre, precio, disponible);
