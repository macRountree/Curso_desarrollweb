function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve('El listado de clientes se descargó correctamente');
      } else {
        reject('Error en la conexion');
      }
    }, 3000);
  });
}

// Async await con function expression
const ejecutar = async () => {
  try {
    // async await es parecido a lo que haciamos en fetch con el .then() pero aqui guardamos  la respuesta en una variable
    // cuando guardamos la variable la funcion debe asignarle un await... pero la funcion padre debe tener un async
    // await detiene la ejecucion del código hasta que se resuelva el promise
    const respuesta = await descargarClientes(); // respuesta es el resolve de nuestro promise
    console.log(20 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error); // el error del catch es el reject de nuestra promesa
  }
};

ejecutar();
