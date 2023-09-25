

"use strict"; //!Corre JS en modo estricto
const producto = {
    nombreProducto: 'Monitor 40 Pulgadas',
    precio: 300,
    disponible: true
}


//! Los objetos si sepueden modificar aunque se declaren const
//? Si añadimos el metodo freeze al objeto producto .. no se podra modificar


Object.freeze(producto);
//! seal no puedes agregar o  quitar propiedades existentes pero si  modificar las existentes
Object.seal(producto);

//! Si agregamos propiedad nueva a nuestro objeto producto no se podra 

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);