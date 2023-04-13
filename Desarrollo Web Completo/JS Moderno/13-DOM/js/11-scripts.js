//Seleccionamos la clase

const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

//Registrar posibles eventos  le pasamos un evento en estecaso un Click

//Primer argumento el evento a esperar = click
//la segunda puede ser una function anonima o declarada
btnFlotante.addEventListener("click", showFooter);

// si hacemos click no tendra la clase de activo... entonces el else activa la clase.
//.. despues ya que la tenga podemos darle activo para removerlo .. lo mismo para el btbn
function showFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");

    this.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "X cerrar";
  }

  console.log(footer.classList);
}
