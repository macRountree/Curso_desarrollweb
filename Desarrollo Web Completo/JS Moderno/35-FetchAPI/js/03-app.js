// Cargar un JSON que es un Arreglo

const cargarArrayBtn = document.querySelector('#cargarJSONArray');

cargarArrayBtn.addEventListener('click', obtenerData);

function obtenerData() {
  const url = 'data/empleados.json';
  fetch(url)
    .then(resp => resp.json())
    .then(res => mostrarHTML(res)); //Nos traera 3 arreglos
}
// No podemos aplicarle destructuring porque es un ARREGLO
function mostrarHTML(empleados) {
  const conten = document.querySelector('.contenido');

  let html = '';

  empleados.forEach(empleado => {
    const { id, nombre, empresa, trabajo } = empleado;
    html += `
    <p>  Empleado: ${nombre} </p>
    <p>  ID: ${id} </p>
    <p>  Empresa: ${empresa} </p>
    <p>  Trabajo: ${trabajo} </p>
      `;
  });
  conten.innerHTML = html;
}
