const busqueda = document.querySelector(".busqueda");

//cuando escribimos aparace escribiendo en consola
busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("Fallo la value");
  }
});
// busqueda.addEventListener("copy", () => {
