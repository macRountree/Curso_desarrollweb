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


//?Herencia : Hereda las funciones o argumentos de una clase Padre a una clase hijo

class Libro extends Producto{

}

const libro = Libro('JS la Rev', 120)




console.log(producto3);
console.log(producto4.formatearPrecio());