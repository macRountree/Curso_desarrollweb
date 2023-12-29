// Manejo de multiples awaits

function descargarNuevosClientes() {
  return new Promise(resolve => {
    console.log('Descargando nuevos clientes');

    setTimeout(() => {
      resolve('Los clientes fueron descargados');
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise(resolve => {
    console.log('Descargando pedidos');

    setTimeout(() => {
      resolve('Los pedidos fueron descargados');
    }, 3000);
  });
}

// Pregunta para Chambaaa
// *

const app = async () => {
  //   const clientes = await descargarNuevosClientes(); //Esto le toma 5 segundos en Descargarse (sett de 5000)
  //   console.log(clientes);

  //   const pedidos = await descargarNuevosPedidos(); //Aqui tiene que esperar a que se terminen los 5 segundos de arriba y despues ejecuta esta funcion en otros 3 segundos
  //   console.log(pedidos);

  // * Para ejecutar funciones independientes (que se ejecuten sincronizadamente)  utilizamos Promise.all con todas las funciones con promesas

  try {
    // Promise.all nos da mas performance si es que queremos que se resuelvan todas las promesas  en paralelo
    const respuesta = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

app();
