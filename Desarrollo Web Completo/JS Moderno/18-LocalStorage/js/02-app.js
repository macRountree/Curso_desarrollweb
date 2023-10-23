//Obtenemos los datos del local storage
const producto = localStorage.getItem("producto");

console.log(JSON.parse(producto));

const meses = localStorage.getItem("meses");
//tambien funciona si asigamos el mes en una variable

const mesesArr = localStorage.getItem("meses");

console.log(JSON.parse(mesesArr));
