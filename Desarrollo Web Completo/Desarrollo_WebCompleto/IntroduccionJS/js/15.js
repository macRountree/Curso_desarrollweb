const meses = ['Enero','Feb','Marzo', 'Abril', 'Mayo'];


const carrito = [
  { nombre: " Monitor 20 pulgadas", precio: 100 },
  { nombre: "Tablet", precio: 700 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 200 },
  { nombre: "Bocinas", precio: 500 },
  { nombre: "LapTop", precio: 100 },
];


//Icludes ... Este método sirve como el forEach
//Barre en este caso los elementos de meses 
//en este caso agregamos Marzo dentro del método para verificar si existe
//e imprime un booleano

const resultado = meses.includes('Marzo');


//!NO ES RECOMENDABLE USAR INCLUDES en arreglo de Objetos
//?En este caso si buscamos celular en nuestro arreglo de objetos aparece false
const resultado2 = carrito.includes('Celular');
console.log(resultado2);


//! Para poder iterar arreglos de objetos lo mejor es utilizar el metodo SOME

const resultado3 = carrito.some((producto)=>{
    
    return producto.nombre === 'Celular'
}
)

console.log(`Resultado3 es  ${ resultado3 }`);


//? Si queremos sacar el total a pagar de nuestro carrito podemos utilizar el metodo Reduce
//!OJO recibe 2 valores uno es el total (que empieza en 0) y el otro el producto a iterar.. y va sumando cada iteración

let resultadoCarrito = carrito.reduce((total, producto) => total + producto.precio,  0)

console.log(`La suma total de nuestro carrito es  ${resultadoCarrito}`);

//? Si queremos obtener cierto elemento con cierto precio o un rango usamos el FILTER
//?En este caso nos devuelve
let resultadoCarrito2 = carrito.filter((producto)=> {return producto.precio < 400 && producto.nombre === 'Teclado' })

console.table(resultadoCarrito2);