//==============LOCALSTORAGE

// LS pertenece a la API de JS
//LS se mantienen los datos guardados
// Sesion Storage .. solo se guardan en una sesion

//LS no se pueden guardar arreglos, ni objetos
//SOLO ALMACENA STRINGS
localStorage.setItem("nombre", 1);

const producto = {
  nombre: "Monitor",
  precio: 100,
};
//Se almacena nuestro objeto como string
const productoStrin = JSON.stringify(producto);

localStorage.setItem("producto", productoStrin);

//lo mismo para arreglos

const meses = ["Enero", "Feb", "Marzo"];

const mesesString = JSON.stringify(meses);

localStorage.setItem("meses", mesesString);
