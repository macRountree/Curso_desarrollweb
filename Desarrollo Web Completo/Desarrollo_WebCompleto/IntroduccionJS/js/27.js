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
function Producto(nombre, precio){

    this.nombre = nombre;
    this.precio = precio;

}
 //*Asi se crea una nueva instancia de un Producto
 //* Le mandamos argumentos de nuestro producto en este caso sera un nombre y un precio .. la clase producto que creamos anteriormente recibimos los 2 argumentos y los creamos con el this
const producto2 = new Producto('Monitor Curvo 4K',500)
const producto3 = new Producto('LapTop',300)

console.log(producto2);
console.log(producto3);
