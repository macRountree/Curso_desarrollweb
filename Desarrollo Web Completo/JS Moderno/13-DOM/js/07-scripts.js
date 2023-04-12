//Cambiar CSS de un elemento
//
const heading = document.querySelector("h1");
heading.style.backgroundColor = "red";
heading.style.fontFamily = "Arial";
heading.style.textTransform = "Uppercase";

//
//Agregar Clases (add)  y eliminar Clases (remove)
const card = document.querySelector(".card");
card.classList.add("Coachella", "Loolapalooza");
card.classList.remove("Coachella");
console.log(card.classList);
