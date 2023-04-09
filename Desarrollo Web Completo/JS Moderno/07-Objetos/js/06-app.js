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

//Asi  destructuramos un objeto anidad en este caso info
const {
  nombre,
  info,
  info: {
    fabricación,
    fabricación: { pais },
  },
} = producto;
console.log(nombre);
console.log(info);
console.log(pais);
