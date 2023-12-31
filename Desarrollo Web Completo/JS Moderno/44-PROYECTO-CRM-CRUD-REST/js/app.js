import { obtenerClientes, eliminarCliente } from './API.js';
(() => {
  const listadoClientes = document.querySelector('#listado-clientes');

  // * ============LISTENERS
  //   Cuando el documento esté listo , descarga todos los clientes
  document.addEventListener('DOMContentLoaded', mostrarClientes);

  listadoClientes.addEventListener('click', eliminarClientes);

  //   *====================FUNCIONES

  async function mostrarClientes() {
    // Utilizamos async await porque el fetch de nuestra API aun no cumple la promesa
    const clientes = await obtenerClientes();

    // una vez obtenidos los clientes de nuestra API ... barremos cada cliente recibido

    clientes.forEach(cliente => {
      const { email, empresa, id, nombre, telefono } = cliente;
      //   Creamos la lista de cada cliente
      const rowCliente = document.createElement('TR');
      rowCliente.innerHTML += `
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
          <p class="text-sm leading-10 text-gray-700"> ${email} </p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <p class="text-gray-700">${telefono}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
          <p class="text-gray-600">${empresa}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
          <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
          <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
      </td>
  `;
      listadoClientes.append(rowCliente);

      //   Validamos si tenemos clientes o no y mostramos un mensaje en la tabla
    });
  }
  function eliminarClientes(e) {
    // podemos eliminar un cliente seleccionando una clase .. si tiene dicha clase elimina el cliente seleccionaod
    if (e.target.classList.contains('eliminar')) {
      // Cada cliente en su etiqueta html cuenta con un atributo data-id por lo cual podemos identificar un cliente especifico
      //   como nos muestra el resultado en string ... lo parseamos en number
      const clienteID = parseInt(e.target.dataset.cliente);

      const confirmar = confirm('Deseas Eliminar este registro');

      if (confirmar) {
        eliminarCliente(clienteID);
      }
      //   console.log(clienteID);
      //   console.log('Eliminando');
    }
  }
})();
