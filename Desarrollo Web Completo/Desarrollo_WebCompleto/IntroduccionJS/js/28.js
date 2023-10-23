//  CLASES

//Desde el ES6 ya se creó la paalabra reservada class


class Producto{   //En esta sintaxys no recibe parametros porque no es una funcion
     constructor(nombre, precio, isAvailable) {  //! Es itgual a una funcion dentro de parentesis recibe los parametros
        this.nombre = nombre
        this.precio =precio;
        this.isAvailable = isAvailable
    }

    formatearProducto(){
        return `Producto: ${this.nombre}` 

    }
    formatearPrecio(){
        return `El precio es: ${this.precio} `
    }

}

//Instanciamos una nueva clase
const producto3 = new Producto('LapTop',300, false);
const producto4 = new Producto('Iphone',100, true);


console.log(producto3);
console.log(producto4.formatearPrecio());

//?Herencia : Hereda las funciones o argumentos de una clase Padre a una clase hijo
//? En este ejemplo tenenmos a la clase hijo Libro su Padre seria Producto.. y el extends 
//?significa que heredara todas las propiedas y funciones de Producto aunque libro pueda tener sus clases propias
class Libro extends Producto{
    constructor(nombre,precio,isbn){ /*?los parametros heredados son nombre y precio y los propios son el codigo isbn */
        super(nombre,precio); //!si queremos heredar
        this.isbn = isbn;
    }
    formatearProducto(){
        /*Podemos super para traernos el metodo de la clase padre su return sera el mismo y concatenamos el isbn de la misma funcion hija */
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}` 

    }

}
//! Instanciamos un nuevo libro con argumentos
const libro = new Libro('JS la Rev', 120, '12312321')


console.log(libro.formatearProducto()); /* imprimimos el libro con las funcion heredada y en consola el mensaje retornado
33 */
