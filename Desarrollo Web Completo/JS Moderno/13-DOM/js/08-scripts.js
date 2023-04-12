// const nav = document.querySelector(".navegacion");
// // console.log(nav);

// console.log(nav.childNodes); //Los espacios en blanco son elementos
// // console.log(nav.children[0]); //retorna html collection //nodename es la etiqueta (a)) y el 1 es un ELEMENT_NODE

// const card = document.querySelector(".card");
// card.children[1].children[1].textContent = "MOTOMAMI";

// card.children[0].src = "img/hacer2.jpg";
// console.log(card.children[0]);

// //traversing de hijo a padre

// console.log(card.parentNode); //en este caso el padre seria contenedor-cards

// console.log(card.parentElement.parentElement.parentElement);

// console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling);
