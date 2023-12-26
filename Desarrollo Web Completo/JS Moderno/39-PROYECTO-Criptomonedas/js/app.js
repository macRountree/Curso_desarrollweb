//? Proyecto Criptomonedas
//?Validacion de formulario
//*Elegir entre diferente tipo de monedas
// *Elegir entre diferente tipo de cripto
// *Implementar spinner
// *Mostrar resultados
// Agregamos el endpoint de su api y lo cotiza en tiempo real

const formulario = document.querySelector('#formulario');
const criptoSelect = document.querySelector('#criptomonedas');

const monedaSelect = document.querySelector('#moneda');
const resultado = document.querySelector('#resultado');

// Creamos un objeto de busqueda... esto se hace para que el se vaya llenando las keys que el usuario
// pida

const objBusqueda = {
  moneda: '',
  crypto: '',
};

// Creamos el promise

const obtenerCrypto = cryptos =>
  new Promise(resolve => {
    resolve(cryptos);
  });

document.addEventListener('DOMContentLoaded', () => {
  consultarCrypto();
  formulario.addEventListener('submit', submitForm);
  //   creamos otro listener .. cuando el usuario cambie de valor de la crypto obtenemos ese valor

  criptoSelect.addEventListener('change', leerValor);
  monedaSelect.addEventListener('change', leerValor);
});

function consultarCrypto() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => obtenerCrypto(resultado.Data)) //obtenerCrypto es un promise
    .then(cryptos => selectCryptos(cryptos));
}

function selectCryptos(cryptos) {
  // Barremos las cryptos desde el fetch con un forEach ya que es un arreglo
  cryptos.forEach(crypto => {
    // El json de crypo con la info de las crypto esta dentro de CoinInfo
    // Para crear un select con options y se renderize ocupamos el Name y el FullName dentro de CoinInfo
    const { Name, FullName } = crypto.CoinInfo;

    const option = document.createElement('OPTION');
    // el atributo value debe ir  el name y el fullName el nombre en general
    option.value = Name;
    option.textContent = FullName;

    criptoSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}
function submitForm(e) {
  e.preventDefault();
  //   Validamos el formulario

  const { moneda, crypto } = objBusqueda;

  if (moneda === '' || crypto === '') {
    mostrarError('Ambos Campos son obligatorios');
    return;
  }

  //   Consultamos la API con resultados

  consultarAPI();
}

function mostrarError(mensaje) {
  // Seleccionamos la clase error .. si en dado caso de que un error No exista
  // ejecutamos el mensaje .
  const existeError = document.querySelector('.error');
  if (!existeError) {
    const divMensaje = document.createElement('DIV');
    divMensaje.classList.add('error');
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 2000);
  }
}

function consultarAPI() {
  // Leemos los valores del objeto principal ( objBusqueda)

  const { moneda, crypto } = objBusqueda;

  //   Volvemos a pedir las consultas a la API Ya con los datos seleccionados por el usuario
  //   Necesitamos el GET de la API con los valores del usuario (es diferente al url del fetch)

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;

  //   ANTES DEL FETCH MOSTRAMOS EL SPINNER

  mostrarSpinner();
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(cotizacion => {
      // * OJO: accedemos a las propiedades del objeto DISPLAY con un [ ] si queremos profundizar agregamos otro []
      mostrarCotizacionHTML(cotizacion.DISPLAY[crypto][moneda]); //nos lanza RAW y display utilizamos cualquiera de los 2
    });
}

function mostrarCotizacionHTML(cotizacion) {
  // Limpiamos el HTML con el resultado

  limpiarHTML();
  // Extraemos los datos importantes par acada cotización
  const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El precio es: <span>${PRICE} </span>`;

  const precioHigh = document.createElement('P');
  //   precioHigh.classList.add('precio');
  precioHigh.innerHTML = `El precio mayor es: <span>${HIGHDAY} </span>`;
  const precioLow = document.createElement('P');
  //   precioLow.classList.add('precio');
  precioLow.innerHTML = `El precio menor es: <span>${LOWDAY} </span>`;
  const precio24H = document.createElement('P');
  //   precio24H.classList.add('precio');
  precio24H.innerHTML = `El variación las ultimas horas: <span>${CHANGEPCT24HOUR} % </span>`;
  const precioUpdate = document.createElement('P');
  //   precio24H.classList.add('precio');
  precioUpdate.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE} </span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioHigh);
  resultado.appendChild(precioLow);
  resultado.appendChild(precio24H);
  resultado.appendChild(precioUpdate);
}
function mostrarSpinner() {
  limpiarHTML();
  const spinner = document.createElement('DIV');
  spinner.classList.add('spinner');

  spinner.innerHTML = `
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
  `;

  resultado.appendChild(spinner);
}
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
