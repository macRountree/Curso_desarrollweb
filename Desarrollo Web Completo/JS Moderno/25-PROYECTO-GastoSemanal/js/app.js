//*===========VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoLista = document.querySelector('#gastos ul');

// *===============EVENTOS
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto); //? 181_2 listeners que ejecuta un prompt al iniciar la app
  formulario.addEventListener('submit', agregarGasto); //Creamos una funcion llamada agregar Gasto porque serra una lógica grande
}

// *================CLASES

// * 2 clases una de presupuesto y otra de UI

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    // Creamos este nuevo método en donde agregamos el arreglo gastos.. y copiamos todo lo del objeto gastos en 1 solo
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    // Obtener cuanto dinero llevamos gastado ..  utilizamos el reducey un total para ir sumando nuestro gasto .. empieza obviamente en
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidadGasto,
      0
    );
    this.restante = this.presupuesto - gastado; //Si ponemos 100 en el presupuesto y agregamos un gasto de 10 ... se resta y muestra 90
  }
  eliminarGasto(id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.calcularRestante();
  }
}
class UI {
  // * Esta clase no necesita constructor porque solo seran metodos basados en la clase Presupuesto
  insertarPresupuesto(cantidad) {
    //Le estamos pasando el objeto Cantidad
    console.log(cantidad); // cantidad es un objeto y podemos desestructurar los valores extraidos del objeto
    const { presupuesto, restante } = cantidad;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    // crear div

    const divMensaje = document.createElement('div');

    divMensaje.classList.add('text-center', 'alert');

    // Cremoas un mensaje .. si es de tipo Error.. agregamo
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }

    // Agretgamos un mensaje

    divMensaje.textContent = mensaje;
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  agregarGastoListado(gastos) {
    this.limpiarHTML();
    // iteramos los gastos
    gastos.forEach(gasto => {
      const { cantidadGasto, nombre, id } = gasto;
      // creamos un li
      const nuevoGasto = document.createElement('li');
      nuevoGasto.className =
        'list-group-item d-flex justify-content-between align-items-center';
      //   nuevoGasto.setAttribute('data-id', id); //Podemos añadir el data id como atributo y asignarle el id de fecha
      //   Pero se recomienda mejor  añadirlo como dataset.id y le pasamos el id
      nuevoGasto.dataset.id = id;

      // Agregamos el HTML

      nuevoGasto.innerHTML = `${nombre}<span class="badge badge-primary badge-pill">$${cantidadGasto}</span>`;

      // creamos el boton eliminar

      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.textContent = 'Eliminar';
      //   Otra forma de agregar texto
      //   btnBorrar.innerHTML = 'Borrar &times;';

      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };
      nuevoGasto.appendChild(btnBorrar);
      gastoLista.appendChild(nuevoGasto); //limpiamos HTML
    });
  }
  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante;
  }
  comprobarPresupuesto(presupuestoObjeto) {
    const { presupuesto, restante } = presupuestoObjeto;
    const restanteDiv = document.querySelector('.restante');
    // comprobamos el 25% de nuestro presupuesto restante
    if (presupuesto / 4 > restante) {
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-danger');
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-warning');
    } else {
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
      restanteDiv.classList.add('alert-success');
    }

    // Si el total es menor a 0
    if (restante <= 0) {
      ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

      //   prevenir que el usuario agregue a los inputs
      formulario.querySelector('button[type="submit"]').disabled = true;
    } else {
      formulario.querySelector('button[type="submit"]').disabled = false;
    }
  }

  limpiarHTML() {
    while (gastoLista.firstChild) {
      gastoLista.removeChild(gastoLista.firstChild);
    }
  }
}

// * instancias
const ui = new UI();
let presupuesto;

// *=================FUNCIONES
// 181_1 usualmente las clases se reservan para los objetos ... las clases es para simplificar el trabaajo

// 181_3

function preguntarPresupuesto() {
  const presupuestoUser = prompt('¿Cual es tu presupuesto?');

  // 181_4 Validamos el prompt para que No este vacío, null o que no sea numero ... si esta vacio recarga la pagina (reload())

  //   console.log(Number(presupuestoUser));505500

  if (
    presupuestoUser === '' ||
    presupuestoUser === null ||
    isNaN(presupuestoUser) ||
    presupuestoUser <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUser);

  ui.insertarPresupuesto(presupuesto);
}

// agregamosGasto

function agregarGasto(e) {
  e.preventDefault();

  // Revisamos los inputs de de Gasto y Cantidad dentro del formulario y nos traemos su id

  const nombre = document.querySelector('#gasto').value;
  const cantidadGasto = Number(document.querySelector('#cantidad').value);

  //   Validamos

  if (nombre === '' || cantidadGasto === '') {
    ui.imprimirAlerta('Ambos campos son Obligatorios', 'error');
    return;
  } else if (cantidadGasto <= 0 || isNaN(cantidadGasto)) {
    ui.imprimirAlerta('Cantidad no válida', 'error');
    return;
  }

  // 185_1 crearemos un objeto de los inputs de gasto y cantidad ... este objeto une Nombre y cantidadGasto a gasto

  const gasto = {
    nombre,
    cantidadGasto,
    id: Date.now(), //agreagamos un id ... para poder seleccionarlo con el date que se ingresa
  };

  //   185_2 Añadimos un nuevo gasto
  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta('Gasto Agregado correctamente'); //Reutilizamos el método de imprimr alerta y solamente generamos El texto..
  //imprimimos los gastos
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
  //   Reiniciamos el formulario
  formulario.reset();
}

function eliminarGasto(id) {
  presupuesto.eliminarGasto(id);
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}
