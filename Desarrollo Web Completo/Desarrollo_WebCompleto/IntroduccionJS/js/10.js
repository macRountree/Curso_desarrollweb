//?====OBJETOS?=====


const nombreProducto = 'monitor 20 pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: 'Monitor 40 Pulgadas',
    precio: 300,
    disponible: true
}


//? Si queremos ver objetos en consola podemos usar esta sintaxis de punto
console.log(producto.disponible);
console.log(producto.nombreProducto);
console.log(producto.disponible);


//! Esta otra forma de acceder a las propiedades de un objeto
console.log(producto['precio']); 


//? Podemos agregar o quitar propiedades

//?Aqui agregamos propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

//? Aqui quitamos propiedades

delete producto.precio;

console.log(producto);