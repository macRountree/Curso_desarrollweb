//seleccionar elementos por ID
//Se recomienda utilizar un ID por documento

//Si hubiera otro id con el mismo nombre solo retornaria el primero

const formulario = document.getElementById("formulario");
console.log(formulario);

//Va retornar un null
const noExiste = document.getElementById("no exite");
console.log(noExiste);
