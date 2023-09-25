const producto = {
    nombreProducto: 'Monitor 40 Pulgadas',
    precio: 300,
    disponible: true
}

const precioProd = producto.precio;
const nombreProd = producto.nombreProducto;

// console.log(precioProd);
// console.log(nombreProd);


//! Asi destructuring del objeto

const {disponible,precio,nombreProducto} = producto;


console.log(producto);