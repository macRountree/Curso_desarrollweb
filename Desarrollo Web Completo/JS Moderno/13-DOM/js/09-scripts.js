const primerLink = document.querySelector("a");
//eliminamos el link Vender (primerlink)
//primerLink.remove();
console.log(primerLink);

//eliminar desde el padre

const nav = document.querySelector(".navegacion");

//sseria los elementos hijos en la posicion 2 que es el link de Registro
console.log(nav.children[2]);
//elimina el boton de registro
nav.removeChild(nav.children[2]);
