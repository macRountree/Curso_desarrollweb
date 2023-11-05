import { eliminarCita, editarCita } from '../Funciones.js';
import { contenedorCitas } from '../Selectores.js';

class UI {
  imprimirAlerta(mensaje, tipo) {
    // creamos el div para mensaje
    const divMsg = document.createElement('DIV');
    divMsg.classList.add('text-center', 'alert', 'd-block', 'col-12');

    if (tipo === 'error') {
      divMsg.classList.add('alert-danger');
    } else {
      divMsg.classList.add('alert-success');
    }

    //
    divMsg.textContent = mensaje;
    // Agreegamos al DOM
    document
      .querySelector('#contenido')
      .insertBefore(divMsg, document.querySelector('.agregar-cita'));
    // Agregamos sett

    setTimeout(() => {
      divMsg.remove();
    }, 5000);
  }
  //   Aplicamos destructuring desde el parentesis de los argumentso
  imprimirCitas({ citas }) {
    this.limpiarHTML();
    citas.forEach(cita => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;
      const divCita = document.createElement('DIV');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      //   Scripting de los elementos
      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = ` <span class="font-weight-bolder"> Propietario: </span> ${propietario} `;
      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = ` <span class="font-weight-bolder"> telefono: </span> ${telefono} `;
      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = ` <span class="font-weight-bolder"> fecha: </span> ${fecha} `;
      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = ` <span class="font-weight-bolder"> hora: </span> ${hora} `;
      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = ` <span class="font-weight-bolder"> sintomas: </span> ${sintomas} `;
      // BtnEliminar =
      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn', 'btn-outline-danger', 'mr-2');
      btnEliminar.innerHTML =
        'Eliminar cita  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg> ';
      btnEliminar.onclick = () => {
        eliminarCita(id);
      };
      // añade btn para editar

      const btnEditar = document.createElement('button');
      btnEditar.classList.add('btn', 'btn-outline-info');
      btnEditar.innerHTML =
        'Editar Cita <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>   ';
      btnEditar.onclick = () => {
        editarCita(cita);
      };
      // agregamos parrafos  al div cita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

export default UI;
