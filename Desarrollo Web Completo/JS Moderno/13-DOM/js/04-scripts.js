//Query selector solo retorna MAXIMO 1 elemento

//Tiene sintaxis similar a los selectores de CSS .nombreDeLaClase

const card = document.querySelector(".card");
console.log(card);

//podemos tener selectores especificos como CS

const info = document.querySelector(".premium .info");

console.log(info);

//seleccionamos el segundo card
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(segundoCard);

//Seleccionar formulari

const formulario = document.querySelector("#formulario");
console.log(formulario);

//selccionar elementos HTML

const nav = document.querySelector("nav");

console.log(nav);
