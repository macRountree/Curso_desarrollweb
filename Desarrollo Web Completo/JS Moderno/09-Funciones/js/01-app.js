// Funciones son procedimientos o instrucciones realizando una accion
// tiene codigo mas ordenados y faciles de mantener

//Podemos tener una funcion para validacion de  nuestro formulario  y otra que envie datos a un srver

//declaracion de funcion function declaration

// add es el nombre de la funcion
// los () le pasamos unos parametros de funcion
// los {} es el cuerpo de la funcion
//llamamos la funcion FUERA DE LA FUNCION con add(); en la linea 16
function add() {
  console.log(2 + 2);
}

add();

//Function expresion es similar a declarar una variable
//

const suma2 = function () {
  console.log(3 + 3);
};

suma2();
