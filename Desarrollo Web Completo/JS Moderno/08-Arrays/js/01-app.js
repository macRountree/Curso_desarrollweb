//ARRAYS ARREGLOSS
//Nos sirven para agrupar elementos del mismo tipo
// Solo contiene valores las llaves son las posiciones... los objetos tienen llave y valor

const numeros = [10, 20, 30];

//                 indez: 0  ,       1,        2    Posiciones
const meses = new Array("Enero", "Febrero", "Marzo");

console.log(numeros);

//nos mostrara undefined
console.log(meses);

//arreglo que contiene datos de todo tipo incluido arraglos anidados

const todo = [
  "hola",
  10,
  true,
  null,
  { nombre: "juan", empleo: "estudiante" },
  [1, 2, 3],
];

console.log(todo);
