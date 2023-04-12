//Modificar texto o imagenes con JS

// const headline = document.querySelector(".contenido-hero h1");
// console.log(headline);

// console.log(headline.innerText); //Si en CSS esta visibilitty hidden no lo encontrara en consola
// console.log(headline.textContent); //Aqui si se visualizara en consola
// console.log(headline.innerHTML);

///podemos aplicar el chainig

const headline = document.querySelector(".contenido-hero h1").textContent;

console.log(headline);

//podemos modificar el heading con esta sintaxis

const nuevoHeading = "Nuevo heading";
document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

//Modificar Imagen
//utilizamos src para poner otra imagen
const img = document.querySelector(".card img");
img.src = "img/hacer4.jpg";
