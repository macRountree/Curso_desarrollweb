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

//En el caso de objetos extraemos el nombre de la llave
console.log(nombre);
//Destructurin cn arreglos

const numeros = [10, 20, 30, 40, 50];

//podemos destructurar arreglos declarando nombres cosa que en
//objetos no se puede

//si ponemos ...tercero junta todos los elementos restantes
// Esta sintaxis es muy comun en REACT

const [primero, segundo, ...tercero] = numeros;

console.log(tercero);
