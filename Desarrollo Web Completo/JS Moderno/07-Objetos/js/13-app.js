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

// Nos muestra las llaves de un objeto
//podemos utilizarlo para saber si un objeto esta vacio
console.log(Object.keys(producto));

//Nos muestra los valores de cada keys
console.log(Object.values(producto));

//Nos retorna las llaves y valores en pares dentro de un array
console.log(Object.entries(producto));
