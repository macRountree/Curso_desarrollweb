window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);
// la API offline Online nos sirve para saber si nuestro navegador tiene internet o no (apss como fb no dejan navegar y mandan notificacion o toast para )
function actualizarEstado() {
  if (navigator.onLine) {
    console.log('Estas conectado');
  } else {
    console.log('No estas conectado');
  }
}
