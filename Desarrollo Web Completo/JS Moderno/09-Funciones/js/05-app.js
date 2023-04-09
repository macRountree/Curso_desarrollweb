function sumar(a, b) {
  //a y b son parametros de una funcion
  console.log(a + b);
}

sumar(2, 3); //2 y 3 son argunmentos

function greet(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

greet("Mac", "Rountree");
greet(); //mostrara undefined undefined porque no le pase ningun argunmento
