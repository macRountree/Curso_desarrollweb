// Ejecutamos pantalla completa  o salir pantalla

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
  // Queremos ver nuestro nav en pantalla completa
  document.documentElement.requestFullscreen();
}
function cerrarPantallaCompleta() {
  document.exitFullscreen();
}
