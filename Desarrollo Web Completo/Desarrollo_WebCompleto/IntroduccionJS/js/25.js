const carrito = [
    { nombre: " Monitor 20 pulgadas", precio: 100 },
    { nombre: "Tablet", precio: 700 },
    { nombre: "Audifonos", precio: 700 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 200 },
    { nombre: "Bocinas", precio: 500 },
    { nombre: "LapTop", precio: 100 },
  ];
  

  //For Each

//   ? Puede ser utilizado unicamente en arreglos. Son metodos exclusivos de arreglos
//? Se ejecutan una ves por cada elemento de un arreglo si hay 8 eleemntos  se ejecutara 8 veces
//? el foreach esta diseñado para mostrar en consola e imprimirlo en el HTML

//? Si damos por el implicito el return (eliminamos el clog dentro del foreach.., aparecera undefined en consola si inicializamos el for each con arr1  */

const arr= carrito.forEach((producto)=> producto)

console.log('------------------------------------');




//map
//?Si queremos crear un nuevo arreglo ... utilizamos el map
//? En este caso si queremos filtrar propiedades de nuestro objeto  nos decantamos por el map
//* Si queremos inicializar el map con arr2 y damos por implicito el return... si imprimira el arreglo
///* Aqui queremos que nuestro nuevo arreglo muestre el nombre del producto de cada elemento y despues se almacenan en arr2 y los muestra en pantalla

//?Podemos darle un formato a nuestro nuevo arreglo si esque nuestro objeto tiene varias propiedades
const arr2= carrito.map((producto)=> `Nombre: ${producto.nombre} - Precio ${producto.precio}`)


console.log(arr);
console.table(arr2);