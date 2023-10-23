// ? =============COTIZADOr DE SEGUROS De AUTOS
// ? ======================Constructores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}
// 174_1 Realiza la cotizacion con los datos utilizamos function normal para acceder al objeto global
Seguro.prototype.cotizarSeguro = function () {
  // 174_2 Si es la opcion 1 (americano) incrementa en 1.15 .. 2 asiatico = 1.85, 3 europeo 1.36

  // 174_3  debemos declar una cantidad y una base
  let cantidad;
  const base = 2000;
  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;

      break;
    case '3':
      cantidad = base * 1.35;

      break;

    default:
      break;
  }

  // 174_4 leemos el año
  const diferencia = new Date().getFullYear() - this.year;
  //cada año que la diferencia es mayor elcosto se reduce un 3%,

  cantidad -= (diferencia * 3 * cantidad) / 100;

  /* Si el seguro es basico se multiplica  *30%  y 50$ */

  if (this.tipo === 'basico') {
    cantidad *= 1.3;
  } else cantidad *= 1.5;

  return cantidad;

  console.log(cantidad);
};

UI.prototype.mostrarResultado = (total, seguro) => {
  const { marca, year, tipo } = seguro;

  let textMarca;

  switch (marca) {
    case '1':
      textMarca = 'Americano';
      break;

    case '2':
      textMarca = 'Asiático';
      break;

    case '3':
      textMarca = 'Europeo';
      break;

    default:
      break;
  }

  // 175_2 creamos el resutlado en un div
  const div = document.createElement('DIV');

  div.classList.add('mt-10');

  div.innerHTML = `
  <p class= "header"> Tu resumen</p>
  <p class="font-bold"> Marca = <span class="font-normal">  ${textMarca} </span>  </p>
  <p class="font-bold"> Año= <span class="font-normal"> ${year} </span>  </p>
  <p class="font-bold"> Tipo= <span class="font-normal capitalize"> ${tipo} </span>  </p>
  <p class="font-bold"> Total = <span class="font-normal"> $ ${total} </span>  </p>
   `;

  //  175_3 Colocamos el resultado en un id llamado resultado

  const resutladoDiv = document.querySelector('#resultado');
  // mostrar Spinner

  const spinner = document.querySelector('#cargando');

  spinner.style.display = 'block';

  setTimeout(() => {
    // 175_4 en lugar de ponerle remove( ) le asignamos none con un style display

    spinner.style.display = 'none';
    resutladoDiv.appendChild(div);
  }, 3000);
};

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

  // Ocultamos cotizaciones previas
  const resultados = document.querySelector('#resultado div');
  if (resultados != null) {
    resultados.remove();
  }

  //instanciasmos el seguro

  const seguro = new Seguro(marca, year, tipo);
  //Utilizar proto para cotizar

  const total = seguro.cotizarSeguro();

  //175_1 creamos otro prototype y nos traemos el metodo aqui para el resultado
  ui.mostrarResultado(total, seguro);
}
