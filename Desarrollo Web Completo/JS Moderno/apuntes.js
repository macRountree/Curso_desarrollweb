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
