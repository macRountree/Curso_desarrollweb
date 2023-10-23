//POO

/*
 //* JAva y C# Usan la programacion orientada a objetos como es debido 
 //! JS usa prototypes 
        
*/

//* Esto es un Object literal .. es utilizado mucho pero no es dinamico
const producto = {
    nombre: 'Tablet',
    precio: 500,
}

//* La otra forma  se conoce como Objec Constructor noes muy comun en proyectos
//* Solo se utiliza cuando se requiera pero es mas comun el object Literal
//*El nombre de la clase debe estar en Mayusculas y debe ser una funcion
//* Una clase es una forma en la que podemos almacenar la forma que tendra un objeto en especifico
//* Una clase Sera el contenedor de toda la forma,datos,metodos,funciones, que tendra un objeto mismo
function Producto(nombre, precio,disponible){

    this.nombre = nombre;
    this.precio = precio;
    this.disponible=disponible

}
 //*Asi se crea una nueva instancia de un Producto
 //* Le mandamos argumentos de nuestro producto en este caso sera un nombre y un precio .. la clase producto que creamos anteriormente recibimos los 2 argumentos y los creamos con el this
const producto2 = new Producto('Monitor Curvo 4K',500, true)
const producto3 = new Producto('LapTop',300, false);
const producto4 = new Producto('Iphone',100, true);


function formatearProducto(producto){

    return `Producto: ${producto.nombre}- precio:${producto.precio}` 
}

// 
// console.log(producto2);
// console.log(producto3);
console.log(formatearProducto(producto2));


//!Un prototype es una funcion que se asocia a un tipo de objeto especifico ... esto se utiliza para que se asigne a la clase producto si queremos crear otra clase llamada Cliente podemos crear un prototype para Cliente
// ? Esta es su sintaxis
Producto.prototype.formatearProducto= function(){

    return `Producto: ${this.nombre}- precio:${this.precio}` 
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());