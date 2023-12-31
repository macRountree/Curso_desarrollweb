const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente => {
  try {
    // Para crear un nuevo cliente utilizamos el metodo POST
    // el body es  el cuerpo de nuestro POST .. puede ser string o puede ser objeto..
    // Lo convertimos en string con stringify
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        // El header varia dependiendo de lo que mandemos al servidor
        //    si estamos subiendo archivos no es aplication/json
        'Content-Type': 'application/json',
      },
    });
    //   Enviamos al usuario al index.html al resolverse el fetch
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
};

export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async clienteID => {
  try {
    await fetch(`${url}/${clienteID}`, {
      method: 'DELETE',
    });
  } catch (error) {
    // debugger;
    console.log(error);
  }
};

//! OJO: para editar siempre tenemos que tener en cuenta que tenemos que extraer primero la info del cliente con GET y despúes guardar cambios con put/patch
// Obtenemos cliente por su id

export const obtenerCliente = async id => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente = await resultado.json();

    return cliente;
  } catch (error) {
    console.log(error);
  }
};

// Actualizamos registro

export const editarCliente = async cliente => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
};
