//objeto MATH

let resultado;

//pi
resultado = Math.PI;
resultado = Math.round(2.8);

//redondear hacia arriba

resultado = Math.ceil(2.1);

//redondear hacia abajo

resultado = Math.floor(2.8);

//raiz cuadrada

resultado = Math.sqrt(144);

//valor absoluto

resultado = Math.abs(-55);

//potencia

resultado = Math.pow(8, 2);

//minimo obtenemos el minimo valor de una serie de numeros

resultado = Math.min(3, 5, 4, 8, 9, 10, 122, 4564, 0);

//maximo obtenemos el maximo valor de una serie de numeros

resultado = Math.max(3, 5, 8, 6, 99, 10000, 52);

//numero aleatorio muchas veces arroja decimales

resultado = Math.random() * 20;

//aleatorio dentro de un rango

resultado = Math.floor(Math.random() * 8);

console.log(resultado);
