const suma = function (a, b) {
  return a + b;
};

// Podemos utilizar las funciones como arrow functions

const sumaArrow = (a, b) => a + b;
const productoArrow = (a, b) => a * b;

const sumaOproducto = fn => fn(10, 20);

// La funcion como argumento se tulizaria de esta forma

console.log(sumaOproducto(sumaArrow)); // Ojo que  no utilizamos () en las fn ya que estariamos llamando toda la funcion y no su operacion
console.log(sumaOproducto(productoArrow));
