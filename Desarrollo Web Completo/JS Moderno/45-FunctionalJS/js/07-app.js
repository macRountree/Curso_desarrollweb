// Funciones que retornan una funcion

const obtenerCliente = () => () => console.log('Mac Rountree');
const fn = obtenerCliente();

fn();
