/* ========METODOS===========


*/
variable.length; // Muestra cuantas letras tiene variable, No requiere'()'
producto.indexOf("20"); //-> Muestra si '20' se encuentra en una cadena de texto..
//si es asi mostrará en que lugar esta en la cadena
producto.includes("tablet"); // = Arroja un boolean en consola si es que Tablet esta o no
//en la cadena de texto
producto.concat(precio); // une el string de producto con el string de precio o directamente
//un string sin variable
console.log(producto + " con precio de " + precio); // tambien es una forma de
//concatenar

console.log(producto.replace("monitor", "monitor curvo")); //reemplaza el primer parametro (monitor)
//por el segundo que es (monitor curvo) y se muesra en consola

console.log(producto.slice(1, 2)); //corta un string en este caso la posicion 1 a 2

/* METODOS DE NUMEROS */

Number.parseInt(numero5); // Number.parseInt convierte numero5 declarado string a un numero ENTERO
Number.parseFloat(numero4); // Number.parseFloat convierte numero4 declarado string a un numero con decimales
console.log(Number.isInteger(numero2)); //arroja True si es un numero entero
console.log(Number.isInteger(numero1)); //arroja false si no es un numero entero

/*
===========OBJETOS==========

*/

Math.PI; //nos arroja el 3.1416
Math.round(2.8); // round es redondeo 2.8 redondea a 3 ,2.4 redondea a 2
Math.ceil(2.2); // ceil redondea lo que sea hacia arriba.. 2.2 redondea a3
Math.floor(2.8); //floor redondea hacia abajo en este caso es 2
Math.sqrt(144); //sqrt es la raiz de un numero
Math.abs(-55); // abs es absoluto.. ignora numeros negativos en este caso arroja 55
Math.pow(8, 2); // pow es power o potencia.. en este caso es 8 2 es 8 * 8 = 64
Math.min(3, 5, 4, 8, 9, 10, 122, 4564, 0); //una serie de numeros nos muestra el numero menor osea 0
Math.max(3, 5, 4, 8, 9, 10, 122, 4564, 0); //una serie de numeros nos muestra el numero mayor osea 4564
Math.random(); //Arroja un numero aleatorio. la mayoria son decimales pequeños
