const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  //llave :  valor
};

//const no deja reasignar otra variable
//pero si es un const de objeto si se puede cambiar

producto.disponible = false;
delete producto.precio;
console.log(producto);
