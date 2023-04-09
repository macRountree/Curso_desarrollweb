const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  info: {
    medidas: {
      talla: "176cm",
      peso: "70 kg",
    },
    fabricación: {
      pais: "China",
    },
  },
  //llave :  valor
};

//creacion de objetos dentro de objetos
console.log(producto);

//accedemos al objeto creado
console.log(producto.info.fabricación.pais);
