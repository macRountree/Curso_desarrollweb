var producto = "monitor 24 pg";
console.log(producto);
producto = "monitor 19 pg";
console.log(producto);
//JS es un lenguaje de tipo dinamico (no existen los tipes no es tipado)

producto = 20;

console.log(producto);

//se puede declarar variables sin valor y asignarlo despues

var disponible;

disponible = true;
disponible = false;
console.log(disponible);

//Inicializamos varias variables

var categoria = "computadora",
  marcar = "dell",
  calificacion = 5;

//las variables no pueden inciiar con numero

//var 99dias; //nose puede iniciar con numero
var dias99;

var _01; //mala práctica

/*   var nombreproducto;//No se recomienda

  var nombreProducto; /*camelCase recomendado*/
/*
  var nombre_producto_categoria; //snakeCase no muyutilizado en JS

  var nombre producto; */
