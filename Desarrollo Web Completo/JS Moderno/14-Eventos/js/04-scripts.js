//====EVENTOS EN FORMULARIOS
//
//Los forms tienen un atributo action y el prevent default evita que se ejecute

const forms = document.querySelector(".formulario");

forms.addEventListener("submit", valForm);

function valForm(e) {
  e.preventDefault();
  console.log("buscando");
  console.log(e.target.action);
}
