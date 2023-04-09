/*JS no es necesario crear una variable para
usarla pero si usamos use strict si nos exige

*/

"use strict";

const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  //llave :  valor
};

//object. freeze congela ese objeto para que no se modifique
Object.freeze(producto);
producto.disponible = false;
console.log(producto);

// Si usamos use strict nos exigira declarar x
// x = 20;
// console.log(x);
