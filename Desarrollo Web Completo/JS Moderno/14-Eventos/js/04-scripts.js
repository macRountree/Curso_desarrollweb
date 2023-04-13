//====EVENTOS EN FORMULARIOS

const forms = document.querySelector(".formulario");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});
