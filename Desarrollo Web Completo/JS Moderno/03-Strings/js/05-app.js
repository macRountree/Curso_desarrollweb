const producto = "Monitor 20 pulgadas";

//Metdo para Strings

//metodo para reemplazar Replace
console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor curvo"));

//Metodo para cortar
console.log(producto.slice(0, 7)); //corta la posicion 0 a la posocion 7

console.log(producto.slice(8)); //muestra de la posicion 8 en adelante

// console.log(producto.slice(2, 1)); // no muestra nada el primer numero debe ser menor al 2do

//parecido a slice

console.log(producto.substring(0, 10)); //corta del caracter 0 a 10

console.log(producto.substring(2, 1)); // si le pasamos un numero mayo al inicial. si lo modifica

const user = "Mac";

console.log(user.substring(0, 1)); //solo corta un caracter en este caso muestra 'm'

console.log(user.charAt(0)); //ChartAt solo muestra el indice seleccionado
