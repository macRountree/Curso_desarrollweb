//SEAL metodo de objeto

"use strict";

const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  //llave :  valor
};

//object.seal no se puede eliminar/agregar propiedades pero si modificar las exixtentes
Object.seal(producto);
producto.disponible = false;
console.log(producto);
