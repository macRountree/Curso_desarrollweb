//GET ITEM

const nombre = localStorage.getItem("nombre2");

console.log(nombre);

const productoJSON = localStorage.getItem("producto");

//JSON.parse convierte un string en un objeto
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem("meses");
const mesesArray = JSON.parse(meses);
console.log(JSON.parse(meses));
