// ?==============ADMIN DE CITAS===========

// !======================VARIABLES GLOBALES
// 191_1 - Seleccionamos todos los inputs de nuestro formulario y el formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// ! ===================UI
const formulario = document.querySelector('#nueva-cita');
// 191_2 - Selecionamos el ul en donde arrojaremos las citas creadas
const contenedorCitas = document.querySelector('#citas');

// !===============CLASES

class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
} //citas si tendra constructor
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

      // agregamos parrafos  al div cita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);

      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

// !instancias

const ui = new UI();
const administrarCitas = new Citas();

// !===================LISTENERS
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  fechaInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  sintomasInput.addEventListener('input', datosCita);

  formulario.addEventListener('submit', nuevaCita);
}

// !===============ObjetoPrincipal
// 191_4 cuando llenemos el formulario se almacenaran en este objeto
// 191_5 Para que essto funcione debemos asignar el atributo name en el mismo input donde tenemos el id
const citaObjeto = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
};

// ! ==============Funciones

// 191_3 funcion que muestra lo que el usuario está escribiendo
// 191_6 el e.target.name mostrara el atributo name del input del HTML seleccionado
function datosCita(e) {
  // 191_7 Recordar que para acceder a las propiedades del objeto tenemos que usar []
  citaObjeto[e.target.name] = e.target.value;
  //   console.log(citaObjeto);
}

//192_1 Validamos y agremamos una nueva cita a la clase Citas
function nuevaCita(e) {
  e.preventDefault();
  // 192_2 extraemos las propiedades del objeto  y validamos
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObjeto;

  if (
    mascota === '' ||
    propietario === '' ||
    fecha === '' ||
    telefono === '' ||
    hora === '' ||
    sintomas === ''
  ) {
    // console.log('Todos los campos son obligatorios');
    // 192_3 utilizamos la instancia ui para añadir alertas o inyectar html
    ui.imprimirAlerta('Los campos son obligatorios', 'error');
    return;
  }
  //   generamos un id unico
  citaObjeto.id = Date.now();

  //   creamos nueva cita le pasasmos una copia deel objeto .. No la referencia del objeto global
  administrarCitas.agregarCita({ ...citaObjeto });

  //   debemos reiniciar el objeto para validacion
  reiniciarObjeto();
  //  reiniciamos el formulario
  formulario.reset();

  //   mostrar html de las citas
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObjeto.mascota = '';
  citaObjeto.propietario = '';
  citaObjeto.telefono = '';
  citaObjeto.fecha = '';
  citaObjeto.hora = '';
  citaObjeto.sintomas = '';
}
