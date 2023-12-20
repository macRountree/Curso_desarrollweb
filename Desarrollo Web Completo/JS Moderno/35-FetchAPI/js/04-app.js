const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerAPI);

function obtenerAPI() {
  const url = 'https://picsum.photos/list';
  fetch(url)
    .then(resp => resp.json())
    .then(res => mostrarHTML(res));
}

function mostrarHTML(datos) {
  const contenido = document.querySelector('.contenido');

  let html = '';
  datos.forEach(perfil => {
    const { author, post_url } = perfil;
    html += `
     <p> Autor: ${author} </p> 
     <a href="${post_url}" target="_blank">Ver Imagen</a>

     `;
  });
  contenido.innerHTML = html;
}
