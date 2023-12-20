// Como cargar JSON (objeto)

// Utilizamos el JSon empleado.json
// JSON es un objeto en JS solo que las propiedades son strings
// Si tenemos un proyecto de backend y mos tramos JS lo ideal es que la respuesta se imprima como JSON para consumirla
// Por si solo no se puede consultar DB
// Nos permite conectar apps
// No importa el lenguaje de backend ya que todos leen JSON
// Son pares de LLave valor

const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerData);

function obtenerData() {
  const url = 'data/empleado.json';
  fetch(url)
    .then(res => {
      // console.log(res.json());
      return res.json(); //?Retornamos la funcion json del objeto del url y
    })
    .then(res => {
      console.log(mostrarHTML(res));
    });
}
// HAcemos esta funcion para mostrar todo en pantalla
// Desestructuramos loa valores del JSONN en los argumentos de la funcion

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector('.contenido');
  //   la clase contenido reemplazara todo lo que esté dentro de ese div por el nuevo innerHTML
  contenido.innerHTML = `
  <p>  Empleado: ${nombre} </p>
  <p>  ID: ${id} </p>
  <p>  Empresa: ${empresa} </p>
  <p>  Trabajo: ${trabajo} </p>
    `;
}
