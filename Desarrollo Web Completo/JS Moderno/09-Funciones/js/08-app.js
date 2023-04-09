function sumar(a, b) {
  return a + b;
}
//con el return podemos declarar otra variable
//en este caso resultado
//y de ahi declararle la funcion suma
//despues podemos enviarlo a consola
const resultado = sumar(2, 6);

console.log(resultado);

//ejemplo avanzado

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularIVA(total) {
  return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(300);

const totalPagar = calcularIVA(total);

console.log(`El total a pagar es ${totalPagar} pesos`);

console.log(total);
