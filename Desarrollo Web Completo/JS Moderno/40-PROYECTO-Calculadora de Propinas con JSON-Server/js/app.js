// Calculadora de propinas
// Utilizaremos una API de platillo y la crearemos
//  Implementamos un modal con un formulario
// Desplegaremos la mesa y la ora para crear orden
// Mostrara el menu el precio tipo de producto y cantidad.. y un resumen de cosumo

// El resumen debe mostrar la cantidad de platillos su precio y un boton para eliminar ese platillo
// tambien se implementara una seccion de propinas con un radio de 10 25 y 50% de propina y lo agrega al total a pagar
// Instalamos una dependencia llamada JSON Server
// JSon tendra su propio endpoint..... si no hay backend uno como frontend puede simular el proyecto con esta dependencia
// JSON server ayuda porque tiene  REST API ...filtra los elementos de un json y los metodos HTTP (GET, PUT, etc)

// Requerimos Mesa y Hora ... para despues almacenarlos en un objeto y darle en crear Orden
// ?================== Vglobales

let cliente = {
  mesa: '',
  hora: '',
  pedido: [], //   Almacenamos el pedido en un arreglo
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector('#mesa').value;
  const hora = document.querySelector('#hora').value;

  //   validamos si no hay campos vacios
  // almacenamos mesay hora en un [] y utilizamos el some para verificar si almenos 1 de esas 2 tiene string vacio
  //   es otra forma de alidar... si se cumple .. almacena todo en campos Vacios
  const camposVacios = [mesa, hora].some(campo => campo === '');

  if (camposVacios) {
    // Verificar si ya hay una alerta

    const existeAlerta = document.querySelector('.invalid-feedback');

    if (!existeAlerta) {
      const alerta = document.createElement('DIV');
      alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
      alerta.textContent = 'Todos los campos son obligatorios';
      document.querySelector('.modal-body form').appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 2000);
    }
    return;
  }
  // Asignamos los datos de mesa y hora del ccliente en la orden
  //   utilizamos el spread operator de tal forma que inyectemos la mesa y la hora seleccionada junto con el pedido

  cliente = { ...cliente, mesa, hora };

  //   console.log(cliente); //Llenamos el objeto

  //   Ocultamos el modal
  //   le asignamos el id formulario al modal de Bootstrap
  // dESPUES accedemos a la data de bootstrap del modal .. y a su funcion getInstrance
  // obtenemos el modal actual y le pasamos el formulario
  const modalForm = document.querySelector('#formulario');
  const ModalBootstrap = bootstrap.Modal.getInstance(modalForm);
  //   ya que tenemos asignado el formulario en el modal ... lo ocultamos con el metodo hide
  ModalBootstrap.hide();

  //   Cuando ya tenemos datos en el objeto cliente mostramos las secciones con los datos del objeto
  mostrarSecciones();
  //   Despues de mostrar Secciones... obtenemos los platillos fr ls API

  obtenerPlatillos();
}

function mostrarSecciones() {
  // en el HTML tenemos las 2 secciones ocultas con la clase de bootstra d-none... entonces cuando tengamos los datos
  // del objeto y le quitamos esa clase de d-none

  const displayNone = document.querySelectorAll('.d-none');
  //   cuando usamos el remove en classlist debemos quitar el punto (.)de la clase
  displayNone.forEach(seccion => seccion.classList.remove('d-none'));

  //   console.log(displayNone);
}
function obtenerPlatillos() {
  // Colocamos la url del backend aqui ... (en este caso usaremos la api de JSON Server)
  const url = 'http://localhost:4000/platillos';
  fetch(url)
    // *  OJO: en Fetch API hay doble THEN .... uno para respuesta y otro para resultado.........
    // En otras herramientas como Axios se utiliza solo 1 then
    // podemos traer los resultados como text(string) o como json(objeto JS) pero txt regresa todo como string y es mas dificil separar
    .then(resp => resp.json())
    .then(resultado => mostrarPlatillos(resultado))
    .catch(error => console.log(error));
}
function mostrarPlatillos(platillos) {
  // En este caso en HTML el main padre tiene el id platillos.... y su DIVhijo tiene la clase contenido

  const contenidoPlatillo = document.querySelector('#platillos .contenido');
  //   Barremos cada platillo del argumento platillos que agarramos del fetch.thed()
  platillos.forEach(platillo => {
    const { nombre, precio, categoria, id } = platillo;
    const row = document.createElement('DIV');
    row.classList.add('row');
    const nombreCol = document.createElement('DIV');
    nombreCol.classList.add('col-md-4');
    nombreCol.textContent = nombre;
    // Primero agregamos el nombre al row y despues agregamos el row al contenido
    row.appendChild();
    contenidoPlatillo.appendChild(row);
    contenidoPlatillo.appendChild(nombreCol);
  });

  //   console.log(platillos);
}
