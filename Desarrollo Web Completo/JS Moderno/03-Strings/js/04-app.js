const producto = '       Monitor 20"           ';

console.log(producto);
console.log(producto.length);

//eliminar espacios al inicio y al final

//inicio

console.log(producto.trimStart());

//final

console.log(producto.trimEnd());

// eliminar espacios en blanco en inicio inicio y final

console.log(producto.trimStart().trimEnd());
console.log(producto.trim());

//console.log(producto.length);
