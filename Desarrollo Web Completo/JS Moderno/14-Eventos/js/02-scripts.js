const nav = document.querySelector(".navegacion");

//Registramos un evento
//Evento con mouse mas comun
nav.addEventListener("click", () => {
  console.log("CLick");
});

//Cada que el mouse este sobre el nav se ejecuta enter en consola
nav.addEventListener("dblclick", () => {
  console.log("enter");
  nav.style.backgroundColor = "red";
});

//Cada que el mouse no este sobre el nav se ejecuta saliendo delnav en consola
nav.addEventListener("mouseout", () => {
  console.log("saliendo del nav");

  nav.style.backgroundColor = "transparent";
});

//mousedown - similar al click
// click
// dblclick = doble click
//mouseup - cuando sueltas el mouse
