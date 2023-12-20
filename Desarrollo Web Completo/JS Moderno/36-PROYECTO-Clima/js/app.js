// Tenemos que habilitar una key de la API
// 1 formulario
// 2 El resultado de la consulta
// 3 Container

const container = document.querySelector('.container');
const resultadoClima = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

window.addEventListener('load', () => {
  form.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  //   console.log('Buscando clima');
  //Validamos el formulario , para obtener el valor del usuario escrito en los inputs usamos value
  const ciudad = document.querySelector('#ciudad').value;
  const pais = document.querySelector('#pais').value;
  //   console.log(ciudad);
  //   console.log(pais);

  //En caso de pasar validación .. buscamos en la api

  if (ciudad === '' || pais === '') {
    //Hubo un error llamamos una funcion con un mensaje
    mostrarError('Ambos campos son Obligatorios');

    return;
  }
  //   LLamamos otra funcion para consultar la API

  consultarAPI(ciudad, pais);
}

// buscarClima()

// ==================Funciones

function mostrarError(mensaje) {
  //   console.log(mensaje);
  //   Creamos alerta

  //Realizamos un if para que se active la alerta... y se active solo una

  const alerta = document.querySelector('.bg-red-100');

  if (!alerta) {
    const alerta = document.createElement('DIV');
    alerta.classList.add(
      'bg-red-100',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'max-w-md',
      'mx-auto',
      'mt-6',
      'text-center'
    );
    alerta.innerHTML = `<strong class="font-bold"> Error!!! </strong>
      <span class="block">${mensaje} </span> 
      `;

    container.appendChild(alerta);

    // Eliminamos la alerta despues de 5 segundos

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function consultarAPI(ciudad, pais) {
  // Algunas API necesitan un ID o key

  const appID = '912a52c62fd0bf6cc9f448df3dae4885';

  //   tenemos que enviar los datos de forma estructurada .. el backend nos tienen que decir que url estan disponibles
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

  console.log(url); // nos arroja los datos de la API
  //   Las APIs tienen sus propias reglas y el Frontend debe saber para poder solicitarlas correctamente

  Spinner();
  fetch(url)
    .then(resp => resp.json())
    .then(datos => {
      limpiarHTML();
      const { cod } = datos;
      if (cod === '404') {
        mostrarError('Ciudad no encontrada');
        return;
      }
      //   mostrar en el HTML
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;
  const centigrados = KelvinCentigrados(temp);
  const max = KelvinCentigrados(temp_max);
  const min = KelvinCentigrados(temp_min);
  const nameCiudad = name;

  const actual = document.createElement('p');
  actual.innerHTML = `${centigrados} &#8451;`;
  actual.classList.add('font-bold', 'text-6xl');

  const tempMaxima = document.createElement('p');
  tempMaxima.innerHTML = `Max: ${max} &#8451; `;
  tempMaxima.classList.add('text-xl');
  const tempMinima = document.createElement('p');
  tempMinima.innerHTML = `Min: ${min} &#8451; `;
  tempMinima.classList.add('text-xl');
  const ciudad = document.createElement('p');
  ciudad.innerHTML = `Clima en: ${name}`;
  ciudad.classList.add('text-xl');

  const resultadoDiv = document.createElement('div');
  resultadoDiv.classList.add('text-center', 'text-white', 'font-bold');
  resultadoDiv.appendChild(ciudad);
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMaxima);
  resultadoDiv.appendChild(tempMinima);

  resultadoClima.appendChild(resultadoDiv);
}

// Los helpers o funciones se pueden declarar asi
const KelvinCentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
  while (resultadoClima.firstChild) {
    resultadoClima.removeChild(resultadoClima.firstChild);
  }
}

function Spinner() {
  limpiarHTML();
  const divSpinner = document.createElement('div');
  divSpinner.classList.add('sk-fading-circle');
  divSpinner.innerHTML = `

 
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>

   `;
  resultadoClima.appendChild(divSpinner);
}
