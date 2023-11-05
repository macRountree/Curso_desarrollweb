import Citas from './classes/Citas.js';
import UI from './classes/UI.js';
import {
  mascotaInput,
  propietarioInput,
  fechaInput,
  sintomasInput,
  horaInput,
  telefonoInput,
  formulario,
} from './Selectores.js';

const administrarCitas = new Citas();
const ui = new UI(administrarCitas);
let editando = false;

const citaObjeto = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
};

export function datosCita(e) {
  // 191_7 Recordar que para acceder a las propiedades del objeto tenemos que usar []
  citaObjeto[e.target.name] = e.target.value;
  //   console.log(citaObjeto);
}

export function nuevaCita(e) {
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
  if (editando) {
    ui.imprimirAlerta('Mensaje agregado correctamente');
    // pASAMOS EL objeto de la cita o edicion
    administrarCitas.edcita({ ...citaObjeto });
    // regresa el texto al estado original
    formulario.querySelector('button[type="submit"]').textContent =
      'Crear Tarea';
    editando = false;
  } else {
    //   generamos un id unico
    citaObjeto.id = Date.now();
    //   creamos nueva cita le pasasmos una copia deel objeto .. No la referencia del objeto global
    administrarCitas.agregarCita({ ...citaObjeto });
    // Agregamos mensaje
    ui.imprimirAlerta('Mensaje agregado correctamente');
  }

  //   debemos reiniciar el objeto para validacion
  reiniciarObjeto();
  //  reiniciamos el formulario
  formulario.reset();

  //   mostrar html de las citas
  ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
  citaObjeto.mascota = '';
  citaObjeto.propietario = '';
  citaObjeto.telefono = '';
  citaObjeto.fecha = '';
  citaObjeto.hora = '';
  citaObjeto.sintomas = '';
}

export function eliminarCita(id) {
  //Eliminamos cita
  administrarCitas.eliminarCita(id);
  // mostramos mensaje
  ui.imprimirAlerta('La cita se eliminó correctamente');
  // Refresh citas  .. Le pasamos todo el objeto ..aplicamos desestructuracion
  ui.imprimirCitas(administrarCitas);
}

export function editarCita(cita) {
  // Nos traemos el objeto completo
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;
  // llenamos el objeto
  citaObjeto.mascota = mascota;
  citaObjeto.propietario = propietario;
  citaObjeto.telefono = telefono;
  citaObjeto.fecha = fecha;
  citaObjeto.hora = hora;
  citaObjeto.sintomas = sintomas;
  citaObjeto.id = id;

  // Cambiar boton
  formulario.querySelector('button[type="submit"]').textContent =
    'Editar Tarea';

  editando = true;
}
