//Creamos una etiqueta ..

const link = document.createElement("A");

//Creamos un texto a nuestro link
link.textContent = "Nuevo link";

//añadiendo un href

link.href = "/nuevo-link";

link.target = "_blank";

//setAttribute podemos pasarle atributos a nuestro link
//primero le pasamos el argumento de atributo datalink- y el nombre del atributo
link.setAttribute("data-link", "nuevo-link");

//agregamos una clase con add
link.classList.add("clase");
//creamos un evento onclick
link.onclick = miFuncion;

//Definimos donde mostrar nuestro enlace
//Seleccionamos navegación

const nav = document.querySelector(".navegacion");
//append child coloca un nuevo link en nuestro nav AL FINAL
nav.appendChild(link);

console.log(nav.children);

//InsertBefore.. le pasamos 2 argumentos .. el link y la posicion en donde queremos poner el link
//eneste caso sria antes de la posicion 1
nav.insertBefore(link, nav.children[1]);

//creamos una funcion con una alerta.. cuando le demos click a nuestro link creado saldra la alerta
function miFuncion() {
  alert("click");
}

//===========================CREACION DE CARDS================000

//creamos 3 parrafos

const p1 = document.createElement("P");

p1.textContent = "Concierto";
p1.classList.add("categoria", "concierto");
const p2 = document.createElement("P");

p2.textContent = "Concierto de Rock";
p2.classList.add("titulo");
const p3 = document.createElement("P");
p3.textContent = "822 x persona";
p3.classList.add("precio");

//creamos DIV con la class info

const info = document.createElement("div");
info.classList.add("info");

//Agregamos parrafo

info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

//CREAOS IMAGEN

const img = document.createElement("img");
img.src = "img/hacer2.jpg";
img.alt = "texto alternativo";

//creamos carda

const card = document.createElement("div");
card.classList.add("card");
card.appendChild(img);
card.appendChild(info);

//
console.log(p1);
console.log(p2);
console.log(p3);
console.log(img);
console.log(info);
console.log(card);

//Insertamos card en el HTML

//Usamos queryselectoc para seleccionar clases existentes
//en este caso es la seccion con la clase hacer y el div con la clase .contenedor-cards
//ahi insertaremos nuestro card recien codeado al html

const contenedor = document.querySelector(".hacer .contenedor-cards");

contenedor.appendChild(card);

//siqueremos mostrarlo al inicio

contenedor.insertBefore(card, contenedor.children[0]);
