// FETCH API SOLO PUEDE LEER Textos no soporta xml

// Queeremos oprimir el boton txt y descargar el archivos datos.txt

const cargarTxt = document.querySelector('#cargarTxt');
// FETCH API Es nativo de JS ... antes se usaba AJAX
cargarTxt.addEventListener('click', obtenerData);

function obtenerData() {
  const url = 'data/datos.txt';
  fetch(url)
    .then(resp => {
      console.log(resp); //Arroja una rezpuesta con status 200 .. la consulta pudo encontrar el archivo
      console.log(resp.url);

      return resp.text();
    })
    .then(datos => {
      console.log(datos);
    })
    // ?Esto es el reject
    .catch(error => {
      console.log(error);
    });
}
