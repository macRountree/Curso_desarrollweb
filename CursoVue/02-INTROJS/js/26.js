const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');
inputNombre.addEventListener('input', e => {
  const heading = document.querySelector('.heading');
  heading.textContent = e.target.value;
  return heading;
});
