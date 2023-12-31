import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(() => {
  // Campos del formulario
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');
  const idInput = document.querySelector('#id'); //en HTML hay un input hidden con el id
  document.addEventListener('DOMContentLoaded', async () => {
    // Al momento de seleccionar un cliente con el boton editar... podemos hacerlo mediante los parametros de la URL... ya que ahi se encuentra un querie de ID al momento de seleccionar dicho cliente
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosURL.get('id'));

    const cliente = await obtenerCliente(idCliente); //arroja el id de ese cliente ... con esto ya podemos arrojar los datos del cliente en el formulario .. siempre y cuando apliquemos async await
    mostrarCliente(cliente);

    // submit al formulario .. creamos la variable y el evento para que se guarden los cambios

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);
    // console.log(formulario);
  });

  function mostrarCliente(cliente) {
    const { email, nombre, empresa, telefono, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();
    // Asi como validamos cuando llenamos el formulario apra agregar cliente .. hacemos lo mismo aqui al guardar
    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: Number(idInput.value),
    };
    console.log(cliente.id);
    //   el every va a verificar que todos los campos de cada input no esten vacios.. retorna un booleano
    if (validar(cliente)) {
      // mostrar mensaje
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }

    // Reescribimos el objeto
    console.log(editarCliente(cliente));
  }
})();
