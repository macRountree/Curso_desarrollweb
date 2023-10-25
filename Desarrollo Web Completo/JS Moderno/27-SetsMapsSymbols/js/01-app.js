// SETS

const carrito = new Set();
// add agrega valores al set
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 7');
carrito.add('Disco 6');
carrito.add('Disco 5');
carrito.add('Disco 4');
carrito.add('Disco 3');
// delete  rlimins un valor que este dentro del Set
carrito.delete('Disco 1');

// hhas nos muestra si xiste un valor dentro del set es booleano
console.log(carrito.has('Camisa'));
// size nos muestra la cantidad de elementos que hay dentro del set
console.log(carrito.size);

// Para eliminar los datos del Set lo hacemos con clear

// console.log(carrito.clear());

// Los elementos del set son iterables como los arreglos ... podemos usar forEach y map
carrito.forEach(pertenece => {
  //   console.log(producto);
  //   console.log(pindex);
  console.log(pertenece);
});

console.log(carrito);

// del arr eliminamos duplicados

const num = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30];

const noDup = new Set(num);
console.log(noDup);
