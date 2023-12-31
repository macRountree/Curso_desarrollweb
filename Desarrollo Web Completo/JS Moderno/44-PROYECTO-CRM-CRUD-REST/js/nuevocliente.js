// Utilizamos un IFII para hacer nuestras functions privadas
import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';
(function () {
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCliente);

  function validarCliente(e) {
    e.preventDefault();
    // console.log('Desde formulario');

    // tenemos que leer los campos  del form
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    //! OJO otra forma de validar el formulario aparte del if es crear un Objke
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };
    //   el every va a verificar que todos los campos de cada input no esten vacios.. retorna un booleano
    if (validar(cliente)) {
      // mostrar mensaje
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }
    nuevoCliente(cliente);
  }
})();
