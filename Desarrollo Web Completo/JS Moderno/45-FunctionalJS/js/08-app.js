// Closures

// Van acompañado del Scope

const obtenerCliente = () => {
  const nombre = 'Mac';

  function muestraNombre() {
    console.log(nombre);
  }

  return muestraNombre;
};

const cliente = obtenerCliente();

cliente();
