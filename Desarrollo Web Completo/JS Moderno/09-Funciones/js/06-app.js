//==========PARAMETROS POR DEFAULT=================0

//Si nos toca trabajar en un sistema bancario
//y alguien hara una transf debemos tener la cuenta y cantidad
//si nonos dan datos devemos tener datos por default

function greet(nombre, apellido = "") {
  console.log(`Hola ${nombre} ${apellido}`);
}

greet("Mac", "Rountree");
greet("Mac"); //mostrara undefined undefined porque no le pase ningun argunmento
