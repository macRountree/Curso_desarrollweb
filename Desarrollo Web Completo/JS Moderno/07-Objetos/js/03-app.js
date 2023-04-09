const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,

  //llave :  valor
};

//agregamos nuevas propiedades a nuestro objeto

producto.imagen = "imagen.jpg";

//eliminamos propiedades con esta sintaxis
delete producto.disponible;

console.log(producto);
