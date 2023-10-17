// ? =============COTIZADOr DE SEGUROS De AUTOS
// ? ======================Constructores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}
// 171_1 Creamos otro objeto para UI pero no requiere datos .. se generaran miesntras hgacemos accione
function UI() {}
// ? ======================VARIABLES
// 171_2  llenamos las ocpciones de los años creando un proto

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector('#year');

  for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};
// ! OJO si nuestra clase no recibe parametros podemos usar arrow Function
UI.prototype.validarFormulario = () => {};

//? En este caso mostrar Alerta tomara un mensaje y un tipo
UI.prototype.mostrarAlerta = (mensaje, tipo) => {
  const div = document.createElement('DIV');
  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }
  div.classList.add('mensaje', 'mt-10');
  div.textContent = mensaje;

  const formulario = document.querySelector('#cotizar-seguro');

  formulario.insertBefore(div, document.querySelector('#resultado'));
  setTimeout(() => {
    div.remove();
  }, 3000);
};

document.addEventListener('DOMContentLoaded', () => {
  // 171_3 cuando cargue el documento llenamos las opciones
  ui.llenarOpciones();
});
// ? ======================Instancias

const ui = new UI();
console.log(ui);
// ? ====================== LISTENERES
eventListener();
function eventListener() {
  // 172_1 No es recomendado agregar selectores dentro de los prototypes
  const formulario = document.querySelector('#cotizar-seguro');

  formulario.addEventListener('submit', cotizarSeguro);
}

// ? ====================== FUNCIONES

function cotizarSeguro(e) {
  e.preventDefault();
  // 172_2 Leer marca , año y tipo de cobertura
  const marca = document.querySelector('#marca').value;
  const year = document.querySelector('#year').value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  console.log(tipo);

  if (marca === '' || year === '' || tipo === '') {
    ui.mostrarAlerta('Todos los campos Son obligatorios', 'error');
    return;
  }
  ui.mostrarAlerta('Cotizando. . . . .', 'correcto');
  //instanciasmos el seguro
  //Utilizar proto para cotizar
}
