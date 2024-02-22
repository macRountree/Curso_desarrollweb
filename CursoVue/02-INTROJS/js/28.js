/*
*Validacion de formularios

*/

const formul = document.querySelector('#formulario');

formul.addEventListener('submit', e => {
  e.preventDefault();

  const alerta = document.createElement('DIV');
  alerta.textContent = 'Todos los cambios son obligatorios';
  alerta.class;
  const nombre = document.querySelector('#nombre').value;
  const password = document.querySelector('#password').value;

  if (nombre === '' || password === '') {
    console.log('Campos Obligatorios');
    return;
  }
});
