const nombre = prompt("Cual es tu nombre"); //Prompt es una función de alerta que nos pregunta algo en el navegador

//llamamos el selector .contenido y concatenamos la variable nombre con un prompt y una respuesta en el navegadordcsdcdc
document.querySelector(
  ".contenido"
).innerHTML = `${nombre} esta aprendiendo JS`;

console.warn("no esta permitido");

function hola() {
  console.log("ok");
}
