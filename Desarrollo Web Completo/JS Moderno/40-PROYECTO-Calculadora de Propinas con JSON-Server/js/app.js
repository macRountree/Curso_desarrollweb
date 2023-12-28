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

// Creamos otro objeto para valorizar llas categoriazs
const categorias = {
  1: 'Comida',
  2: 'Bebidas',
  3: 'Postres',
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
  const url = 'http://localhost:3000/platillos';
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
  //   console.log(platillos);
  const contenidoPlatillo = document.querySelector('#platillos .contenido');
  //   Barremos cada platillo del argumento platillos que agarramos del fetch.thed()
  platillos.forEach(platillo => {
    const { nombre, precio, id, categoria } = platillo;
    // console.log(nombre);
    // console.log(categoria);
    // console.log(precio);
    // console.log(id);

    const row = document.createElement('DIV');
    row.classList.add('row', 'py-3', 'border-top');

    // creamos cada columna de 1 platillo
    // columna de Nombre
    const nombreCol = document.createElement('DIV');
    nombreCol.classList.add('col-md-4');
    nombreCol.textContent = nombre;
    // columna de precio

    const precioCol = document.createElement('DIV');
    precioCol.classList.add('col-md-3', 'fw-bold');
    precioCol.textContent = `$${precio}`;

    // columna Categoria

    const categoriaCol = document.createElement('DIV');
    categoriaCol.classList.add('col-md-3');
    // Con el objeto global de categorias... empatamos el id de cada categoria con el del numero de categoria de nuestra API
    categoriaCol.textContent = categorias[categoria];

    // Creamos un input para agregar cantidades de ese platillo

    const inputCantidades = document.createElement('INPUT');
    inputCantidades.type = 'number';
    inputCantidades.min = 0;
    inputCantidades.value = 0;
    inputCantidades.id = `producto - ${id}`;
    inputCantidades.classList.add('form-control');

    // Agregamos una funcion que al momento de agregar una cantidad .... lo mande a la seccion de resumen
    // Recordar que los listeners como onclick onchange se utilizan cuando inyectamos HTML con JS

    // Si dejamos la funcion agregarPlatillo(id) de esta manera si le estamos pasando el id pero
    // traera Todos los Id de todos los platillos debido a que estamos llamando toda la funcion y no la accion de change
    //
    inputCantidades.onchange = function () {
      // Queremos leer el numero del input
      //   inputCantidades.value me traera el numero en String y debemos convertirlo a numero.... usamos parseInt

      const cantidad = parseInt(inputCantidades.value);
      console.log(cantidad);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const agregarADiv = document.createElement('DIV');
    agregarADiv.classList.add('col-md-2');
    agregarADiv.appendChild(inputCantidades);

    // Mandamos las columnas al row

    row.appendChild(nombreCol);
    row.appendChild(precioCol);
    row.appendChild(categoriaCol);
    row.appendChild(agregarADiv);

    // Renderizamos en el contenido vacio de nuestro HTML

    contenidoPlatillo.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  //   console.log(`Agregando ....`, producto);

  //   Primero tenemos que traernos el pedido Actual para eso lo extraemos del objeto global

  const { pedido } = cliente;

  //   Tenemos que revisar que se eliminen aquellos platillos que se repiten o que seean mayor 0

  if (producto.cantidad > 0) {
    // El some verificara si en nuestro arreglo  se repiten productos con el mismo id si se llegan a repetir lo eliminamos
    if (pedido.some(articulo => articulo.id === producto.id)) {
      // LSi el articulo Ya existe (some tirara true si existe)  actualizamos la cantidad
      //   map() va a crear un nuevo array ,,,
      const pedidoActualizado = pedido.map(articulo => {
        // articulo esta dentro del scope de pedidoActualizado ... no tendra colisiones con el articulo de pedido.some()
        // si nuestro id de articulo es igual a id de producto ... entonces iguala el articulo de la cantidad que pusimos en el input de producto
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        // le damos return aqui para que jale toda la referencia de los objetos
        return articulo;
      });
      //   Se asigna array a cliente.pedido (agregamos el resultado de pedidoACtualizado a cliente.pedido)
      cliente.pedido = [...pedidoActualizado];
    } else {
      // Si el artiuclo no existe lo agregamos al array de pediddo
      cliente.pedido = [...pedido, producto];
    }
  } else {
    // Eliminamos elementos cuando la cantidad es 0
    // Filter nos permitira elementos del arreglo ... en este caso solo seria la cantidad
    const resultado = pedido.filter(artiuclo => artiuclo.id != producto.id);

    // le pegamos el resultado al cliente.pedido
    cliente.pedido = [...resultado];
  }

  //   console.log(cliente.pedido);
  // Limpiamos Resumen

  limpiarHTML();
  //   Verificamos si hay pedidos
  if (cliente.pedido.length) {
    // Mostramos el Resumen

    actualizarResumen();
  } else {
    // Si no hay nada mostramos el mensaje
    MensajePedidoVacio();
  }
}

function actualizarResumen() {
  // en el HTML primero debemos eliminar el parrafo del Resumen que nos dice 'añade los elementos del pedido'
  const contenidoResumen = document.querySelector('#resumen .contenido');

  const resumen = document.createElement('DIV');
  resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');
  //  renderizamos  la mesa y la hora que seleccionamos  antes
  const mesa = document.createElement('P');
  mesa.textContent = 'Mesa: ';
  mesa.classList.add('fw-bold');

  const mesaSpan = document.createElement('SPAN');
  mesaSpan.classList.add('fw-normal');

  //   Render Hora
  const hora = document.createElement('P');
  hora.textContent = 'Hora: ';
  hora.classList.add('fw-bold');
  const horaSpan = document.createElement('SPAN');
  horaSpan.classList.add('fw-normal');

  mesa.appendChild(mesaSpan);
  hora.appendChild(horaSpan);

  //   Creamos un Heading para el resumen
  const heading = document.createElement('H3');
  heading.textContent = 'Platillos consumidos';
  heading.classList.add('fw-bold', 'my-4', 'text-center');

  //   Tenemos que iterar el  Array de platillos y mostrarlo
  const grupo = document.createElement('UL');
  grupo.classList.add('list-group');

  const { pedido } = cliente;

  pedido.forEach(articulo => {
    const { nombre, cantidad, precio, id } = articulo;

    const lista = document.createElement('LI');
    lista.classList.add('list-group-item');

    const nombreElemento = document.createElement('H4');
    nombreElemento.classList.add('my-4');
    nombreElemento.textContent = nombre;
    const cantidadElemento = document.createElement('P');
    cantidadElemento.classList.add('fw-bold');
    cantidadElemento.textContent = `Cantidad: ${cantidad}`;
    const precioElemento = document.createElement('P');
    precioElemento.classList.add('fw-bold');
    precioElemento.textContent = `Precio: $${precio}`;

    // Agregamos un boton para eliminar

    const btnEliminar = document.createElement('BUTTON');
    btnEliminar.classList.add('btn', 'btn-danger');
    btnEliminar.textContent = 'Eliminar Pedido';

    // Funcion para eliminar pedido

    btnEliminar.onclick = function () {
      EliminarProductoID(id);
    };

    // Subtotal
    const subtotalElemento = document.createElement('P');
    subtotalElemento.classList.add('fw-bold');
    subtotalElemento.textContent = CalcularSubtotal(precio, cantidad);

    // Agregamos elementos al LI

    lista.appendChild(nombreElemento);
    lista.appendChild(cantidadElemento);
    lista.appendChild(precioElemento);
    lista.appendChild(subtotalElemento);
    lista.appendChild(btnEliminar);
    // Agregamos todo a grupo

    grupo.appendChild(lista);
  });

  //   Agregamos todo al resumen

  resumen.appendChild(heading);
  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(grupo);

  contenidoResumen.appendChild(resumen);

  mesaSpan.textContent = cliente.mesa;
  horaSpan.textContent = cliente.hora;

  //   console.log('Desde Actualizar Resumen');
  //   mostramos el formulario de propinas

  mostrarPropinas();
}

function CalcularSubtotal(precio, cantidad) {
  return `El subtotal es: $${precio * cantidad}`;
}

function EliminarProductoID(id) {
  const { pedido } = cliente;
  const resultado = pedido.filter(artiuclo => artiuclo.id != id);
  cliente.pedido = [...resultado];

  limpiarHTML();

  if (cliente.pedido.length) {
    actualizarResumen();
  } else {
    MensajePedidoVacio();
  }
  //   Elpreoducto seeliminó ... debemos resetear los inputs a ceros
  //   comotenemos el Id como referencia seleccionamos con queryS para resetear

  // Primero creamos un Tstring con el id ... entonces le podemos crearun id(#producto)
  // Creamos otra variable donde seleccionamos con qSelector dicho producto y lo reseteamos a 0
  // Cuando eliminemos el producto .. inputDeleted se encargara de dejar los inputs en 0
  const productoDeleted = `#producto-${id}`;
  console.log(productoDeleted);
  const inputDeleted = document.querySelector(productoDeleted);
  inputDeleted.value = 0;
}

function limpiarHTML() {
  const contenido = document.querySelector('#resumen .contenido');

  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}

function MensajePedidoVacio() {
  const contenido = document.querySelector('#resumen .contenido');
  const texto = document.createElement('P');
  texto.classList.add('text-center');
  texto.textContent = `Añade los elementos del pedido`;

  contenido.appendChild(texto);
}

function mostrarPropinas() {
  // El resumen de los platillos tiene un col-md-6 del lado izquierdo
  // colocaremos las propinas de lado derecho
  const contenidoResumen = document.querySelector('#resumen .contenido');

  const formulario = document.createElement('DIV');
  formulario.classList.add('col-md-6', 'formulario');
  const divForm = document.createElement('DIV');
  divForm.classList.add('card', 'py-2', 'px-3', 'shadow');

  const heading = document.createElement('H3');
  heading.classList.add('my-4', 'text-center');
  heading.textContent = 'Propina';

  //   Creamos una radio button para seleeccionar que propina queremos dar
  // radio 10%
  const radio10Btn = document.createElement('INPUT');
  radio10Btn.type = 'radio';

  radio10Btn.name = 'propina';
  radio10Btn.value = '10';
  radio10Btn.classList.add('form-check-input');
  // Agregamos evento para calcular propina
  // Como no le pasamos ningun parámetro no creamos callback
  radio10Btn.onclick = calcularPropina;

  const radio10Label = document.createElement('LABEL');
  radio10Label.textContent = '10%';
  radio10Label.classList.add('form-check-label');

  const radio10div = document.createElement('DIV');
  radio10div.classList.add('form-check');

  radio10div.appendChild(radio10Btn);
  radio10div.appendChild(radio10Label);
  // radio 25%
  const radio25Btn = document.createElement('INPUT');
  radio25Btn.type = 'radio';

  radio25Btn.name = 'propina';
  radio25Btn.value = '25';
  radio25Btn.classList.add('form-check-input');
  radio25Btn.onclick = calcularPropina;

  const radio25Label = document.createElement('LABEL');
  radio25Label.textContent = '25%';
  radio25Label.classList.add('form-check-label');

  const radio25div = document.createElement('DIV');
  radio25div.classList.add('form-check');

  radio25div.appendChild(radio25Btn);
  radio25div.appendChild(radio25Label);
  // radio 50%
  const radio50Btn = document.createElement('INPUT');
  radio50Btn.type = 'radio';

  radio50Btn.name = 'propina';
  radio50Btn.value = '50';
  radio50Btn.classList.add('form-check-input');
  radio50Btn.onclick = calcularPropina;

  const radio50Label = document.createElement('LABEL');
  radio50Label.textContent = '50%';
  radio50Label.classList.add('form-check-label');

  const radio50div = document.createElement('DIV');
  radio50div.classList.add('form-check');

  radio50div.appendChild(radio50Btn);
  radio50div.appendChild(radio50Label);

  divForm.appendChild(heading);
  divForm.appendChild(radio10div);
  divForm.appendChild(radio25div);
  divForm.appendChild(radio50div);
  formulario.appendChild(divForm);
  contenidoResumen.appendChild(formulario);

  //   console.log('mostrando Form');
}
function calcularPropina() {
  const { pedido } = cliente;
  let subtotal = 0;
  // Calculamos el subtotal
  pedido.forEach(articulo => {
    subtotal += articulo.cantidad * articulo.precio;
  });
  // Seleccionamos el radio button con la propina del cliente
  const propinaSelect = document.querySelector(
    '[name="propina"]:checked'
  ).value;

  //Calcular la propina
  const propina = (subtotal * parseInt(propinaSelect)) / 100;

  console.log(propina);
  // Calcular todo el total

  const total = subtotal + propina;

  mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina) {
  const divTotales = document.createElement('DIV');
  divTotales.classList.add('total-pagar');
  // subtotal

  const subtotalParrafo = document.createElement('P');
  subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-5');
  subtotalParrafo.textContent = ' Subtotal consumo: ';

  const subtotalSpan = document.createElement('SPAN');
  subtotalSpan.classList.add('fw-normal');
  subtotalSpan.textContent = `$${subtotal}`;

  subtotalParrafo.appendChild(subtotalSpan);
  // propinas

  const propinaParrafo = document.createElement('P');
  propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
  propinaParrafo.textContent = ' propina consumo: ';

  const propinaSpan = document.createElement('SPAN');
  propinaSpan.classList.add('fw-normal');
  propinaSpan.textContent = `$${propina}`;

  propinaParrafo.appendChild(propinaSpan);
  // TOTAL

  const totalParrafo = document.createElement('H3');
  totalParrafo.classList.add('fs-3', 'fw-bold', 'mt-2');
  totalParrafo.textContent = ' Total a pagar: ';

  const totalSpan = document.createElement('SPAN');
  totalSpan.classList.add('fw-normal');
  totalSpan.textContent = `$${total}`;

  totalParrafo.appendChild(totalSpan);

  //   eliminamos el ultimo resutlado

  const totalpagarDiv = document.querySelector('.total-pagar');

  if (totalpagarDiv) {
    totalpagarDiv.remove();
  }

  divTotales.appendChild(subtotalParrafo);
  divTotales.appendChild(propinaParrafo);
  divTotales.appendChild(totalParrafo);

  const formulario = document.querySelector('.formulario > div');
  formulario.append(divTotales);
}
