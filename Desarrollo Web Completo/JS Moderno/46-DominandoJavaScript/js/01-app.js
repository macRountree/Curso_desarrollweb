// SCOPES
// Es cuando creamos una var y puede ser vista desde una funcion o por un bloque de código

// Scope Global
// Scope en una funcion

const cliente = 'Charles';
function mostrarCliente() {
  const cliente = 'Mac'; //El clog tendra prioridad a este scope.. si no existiera este log priorizara el global
  console.log(cliente); // el Scope cliente  sale error porque el scope esta almacenado dentro de una funcion (no es global)
}

mostrarCliente();
