const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos() {
  fetch(url)
    .then(resp => resp.json())
    .then(res => console.log(res))
    .catch(error => console.log(error));
}

// Esta es la otra forma de utilizar el fetch con async await
async function obtenerDatos() {
  // En lugar de tener un then con la respuesta tenemos la variable respuesta ahorrandonos 1 linea

  try {
    // En este caso ... tenemos que utilizar 2 awaits (No un Pomise.all) ya que necesitamos primero la respuesta  y despues el resultado
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
//* OJO esta syntaxis es mas clara que el fetch clasico... aunque es un poco mas ded código es mas legible
