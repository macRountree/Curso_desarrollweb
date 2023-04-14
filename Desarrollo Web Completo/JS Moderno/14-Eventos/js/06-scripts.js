//EVENT BUBBLIG
//cuanndo presionamos un evento y se propaga en muchos lugares
const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

const precio = document.querySelector(".precio");

//En este caso se dispararan los 3 eventos.. por el event bubbling
//ya que card es el padre y si le damos click en titutlo se disparan los 2 eventos
//para eso usamos stopPropagation con un e como argumentos
cardDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en card");
});
infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});
titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo");
});
precio.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en precio");
});

//En este caso
