add();

function add() {
  console.log(2 + 2);
}

//Function expresion es similar a declarar una variable
//
suma2();
const suma2 = function () {
  console.log(3 + 3);
};

//JS se escanea en 2 vueltas

//Etapa de creacion se lee y se registra
// y despues en la segunda vuelta es la etapa de ejecuccion

//en el caso de la segunda funcion (expresion) como es declarada como variable
//nos marca error.. porque en la primer pasada
