///FUNCIONS QUE ENVIAN DATOS A LA CONSOLA

iniciarApp();
function iniciarApp() {
  console.log("iniciando app");

  segundaFuncion(); //Se recomienda llamar la segunda funcion para que se encadenen
}

function segundaFuncion() {
  console.log("Segunda funcion");

  usuarioAuth("Mac");
}

function usuarioAuth(nombre) {
  console.log("Auth usuario.... esperee...");
  console.log(`${nombre} auth correctamente...`);
}
