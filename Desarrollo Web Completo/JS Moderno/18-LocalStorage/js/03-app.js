///ELIMINAR ELEMENTOS DE LOCALSTORAGE

localStorage.removeItem("nombre");

//acualizar registro

const mesesArr = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArr);

mesesArr.push("nuevoMes");

console.log(mesesArr);

localStorage.setItem("meses", JSON.stringify(mesesArr));

//limpia el local storage
localStorage.clear();
