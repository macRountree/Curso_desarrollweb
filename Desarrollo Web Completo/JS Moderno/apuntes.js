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

/* 
=============METODO PARA OBJETOS============
*/

Object.freeze(producto); //Congelamos el objeto producto para que no se pueda modificar,eliminar ni agregar nuevas keys
Object.isFrozen(producto); // metodo boolean que nos dice si esta congelado o no un objeto
Object.seal(producto); //no se puede eliminar/agregar propiedades pero si modificar las exixtentes

Object.isSealed(producto); //metodo boolean que identifica si nuestro objeto esta sellado o no
Object.assign(producto, medidas); //nos permite unir 2 objetos pasandole las varibales de cada objeto
const resultado2 = { ...producto, ...medidas }; // ...producto , ...medidas spread es producto y rest esmedidas y une los 2
console.log(Object.keys(producto)); //Nos retorna las llaves de un objeto
console.log(Object.values(producto)); //Nos retorna los valores de cada llave de un objeto
console.log(Object.entries(producto)); // Nos retorna las llaves y  valores de cada objeto en arreglos

/*
            =========ARRAYS===========
*/

console.log(numeros[2]); // Accede al valor de la posicion 2 del arreglo
console.log(numeros[6][2]); //Un arreglo de arareglos.. la posicion 6 y la subposcion 2
console.log(meses.length); //Lenght mide el arreglo de meses
meses.push("Abril"); //Agrega un elemento al final del arreglo
carrito.unshift(producto3); // Agrega un elemento al principio del arreglo
carrito.pop(); //Elimina el ultimo elemento del arreglo carrito
carrito.shift(); //Elimina el primer elemento de un arreglo (carrito)
carrito.splice(2, 1); //Elimina 1 elemento desde la posicion 2

/*=============================FUNCIONES=============== */
//--> funcion declarativa
function add() {
  console.log(2 + 2);
}

add();

//--> Expresion de la funcion no puede llamar a al funcion antes de la expresion
//por la forma en que esta declarada (como variable)
const suma2 = function () {
  console.log(3 + 3);
};

suma2();

// --> Funciones a un objeto
const reproductor = {
  //la propiedad reproducir tiene una funcion y ahora es llamado moetodo de propiedad
  reproducir: function (id) {
    console.log(`Reproduciendo una cancion con el id ${id}`);
  },
};

/* ====================FUNCIONES PARA ARRAYS================================= */
//Vamos a iterar el arreglo carrito con varios objetos dentro el cual cada objeto es llamado producto
// en este caso llamamos cada nombre y precio de cada objeto
carrito.forEach(function (producto) {
  console.log(`${producto.nombre}  - Precio : ${producto.precio}`);
});

// .map itera arreglos como foreach pero este crea nuevos arreglos.. cosa que foreach NO
const array2 = carrito.map(function (producto) {
  return `${producto.nombre}  - Precio : ${producto.precio}`;
});
