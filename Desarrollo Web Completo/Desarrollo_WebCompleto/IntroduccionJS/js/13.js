//? =========UNIR 2 objetos===========

const producto = {
    nombreProducto: 'Monitor 40 Pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida:'1m'
}

//? SPREAD OPERATOR  3 puntos seguido del objeto.. si queremos unir a otro unimos medidas 
//! Se unen los 2 objetos pero NO modifican los objetos originales
const nuevoProducto = {...producto,...medidas};

console.log(producto);
console.log(nuevoProducto);
