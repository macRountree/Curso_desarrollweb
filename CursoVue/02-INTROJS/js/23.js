//*DOM

const heading = document.querySelector('.heading');

heading.textContent = 'Nuevo Heading';

// console.log(heading);
// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.tagName);
//*Regresa todos los enlaces.... el querySelector regresara el primero
const enlaces = document.querySelectorAll('.navegacion a');

// console.log(enlaces);

//*Si solo seleccionames enlaces .no cambiara el texto.. porque es una coleecion de con las mismas clases
//*debemos hacerlo con el forEach
enlaces.textContent = 'nuevo texto';

enlaces.forEach(enlace => (enlace.textContent = 'Nuevo texto'));
