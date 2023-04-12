//QueryselectorALL es la misma sintaxis que QuerySelector

//La diferencia entre estos es que Query selector solo retorna 1 elemeneto
//query selectorALL selecciona tdos los elementos del DOM

const card = document.querySelectorAll(".card");
console.log(card);

const forms = document.querySelectorAll("#formulario");
console.log(forms);

//si un elemento no existe retorna un arreglo vacio

const noExiste = document.querySelectorAll("no-existe");

console.log(noExiste);
