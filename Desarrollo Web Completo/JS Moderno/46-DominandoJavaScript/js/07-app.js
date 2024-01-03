// !Event Loop Evento de concurrencia
// ! el codigo de JS  se corre en 1 solo hilo
// !solo suscede 1 cosa a la vez
// Es como un while que ejecuta tareas  mientras haya
console.log('Primero');

setTimeout(() => {
  console.log('Segundo');
}, 0);

console.log('Tercero');
setTimeout(() => {
  console.log('Cuarto');
}, 0);

new Promise(function (resolve) {
  resolve('Desconocido.....');
}).then(console.log);

console.log('Ultimo');

function hola() {
  console.log('helllllllo');
}

hola();

// Prioridades en el Event loop

/**
 * los logs
 * Funciones
 *  Promise
 * Settime out
 */
