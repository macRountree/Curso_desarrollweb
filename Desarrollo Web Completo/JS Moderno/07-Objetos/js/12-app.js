//OBject literal

const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    );
  },

  //llave :  valor
};

//Object CONSTRUCTOR

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Mnitor 24 pulgadas", 300);
console.log(producto2);

const producto3 = new Producto("Monitor 32 pulgadas", 600);
console.log(producto3);
