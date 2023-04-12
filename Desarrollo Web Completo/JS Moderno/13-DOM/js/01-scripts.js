let elemento;

//Estas son formas de seleccionar elementos de una pagina web
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.forms; //retorna la cantidad de formularios en el dom
elemento = document.forms[0].method; //puede acceder al indice y al elemento del formulario
elemento = document.forms[0].classList; //puede acceder al indice y al elemento del formulario

elemento = document.links;
elemento = document.links[4].classList; //Retorna las clases de los links del indice 4
elemento = document.images; //retorna la cantidad de imagenes que
elemento = document.scripts;

console.log(elemento);
