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

const producto2 = {
  precio: 200,
  disponible: false,
  mostrarInfo: function () {
    console.log(
      `El prodcuto: ${this.nombre} tiene un precio de  ${this.precio}`
    );
  },
};

//this nos muestra ls valores del mismo objeto , es una forma de llamar ese objeto especifico
// en este caso cuando llamamos a los 2 objetos las llaves son especificas para cada objeto
producto.mostrarInfo();
producto2.mostrarInfo();
