// Generadores es una funcion que retorna un iterador ... tiene un * antes del nombre
function* crearGenerador() {
  // en los generadores hay una palabra resservada llamada yield

  yield 1;
  yield 'Juan';
  yield 3 + 3;
  yield true;
}
//De esta manera accedemos a los valores yield
const iterador = crearGenerador();
// console.log(iterador);
// console.log(iterador.next().value); // Podemos acceder al valor pero despues aparece como suspended  en este next accedemos a yield 1
// console.log(iterador.next()); // Podemos acceder al valor pero despues aparece como suspended
// console.log(iterador.next().value); // Podemos acceder al valor pero despues aparece como suspended en este next accedemos a 3+3

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ['p1', 'p2'];

const iteradorFor = generadorCarrito(carrito);

console.log(iteradorFor.next());
console.log(iteradorFor.next());
console.log(iteradorFor.next()); //Si tenemos 2 valores en nuestro arreglo debemos declarar 3 veces el next para que se termine la iteracion
