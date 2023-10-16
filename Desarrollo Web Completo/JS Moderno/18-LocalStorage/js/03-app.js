//Eliminar elementos en el localStorage

localStorage.removeItem("producto");

// Las apps web deben tener CRUD en el caso de localStorage no hay UPDATE

const meses = JSON.parse(localStorage.getItem("meses"));
console.log(meses);
meses.push("Nuevo mes");
console.log(meses);
localStorage.setItem("meses", JSON.stringify(meses));
localStorage.clear();
