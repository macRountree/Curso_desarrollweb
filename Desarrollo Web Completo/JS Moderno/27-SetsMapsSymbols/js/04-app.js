// 1! weak map .. es para manterer una serie de datos privados

const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto)); //has nos mostrara un booleano si existe un producto
console.log(weakmap.delete(producto));
// console.log(weakmap.size); // No se puede conocer la extension de un weakmap

console.log(producto);
