//Seleccionar elementos por su clase
//tenemos que respetar la clase que tenemos declarada en el html
const header = document.getElementsByClassName("header");

console.log(header);

const hero = document.getElementsByClassName("hero");

console.log(hero);

//si las clases existen mas de 1 vez

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//Si una clase no existe
//En este caso retorna un arreglo vacio

const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
