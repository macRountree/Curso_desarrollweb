const busqueda = document.querySelector(".busqueda");

//cuando escribimos aparace escribiendo en consola
// en este caso si no hay valor o borramos todo en el input
//aparecera fallo la value
busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("Fallo la value");
  }
});

// busqueda.addEventListener("copy", () => {

//evento para validacion de formularios como el blur

//hay otros como copy
// paste
//cut
// input
