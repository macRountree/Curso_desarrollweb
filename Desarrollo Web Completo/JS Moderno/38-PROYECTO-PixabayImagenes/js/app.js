// Buscador de imagenes con la api de Pixabay
// Busqueda de imagenes, paginación , uso de fetch API de pixabay con banco de imagenes
// la API de pixabay requiere Key
// Solo buscaremos imagenes por Términologia
// * OJO: cuando hacemos una paginación y sale la pagina  y media tenemos que redondear hacia arriba

const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacion = document.querySelector('#paginacion');
const registrosXPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

// cuando cargue la pagina se dispararan los eventos
window.onload = () => {
  formulario.addEventListener('submit', validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector('#termino').value;
  if (terminoBusqueda === '') {
    mostrarAlerta('Agrega busqueda');
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector('.bg-red-100');

  if (!existeAlerta) {
    const alerta = document.createElement('P');
    alerta.classList.add(
      'bg-red-100',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'max-w-lg',
      'mx-auto',
      'mt-6',
      'text-center'
    );

    alerta.innerHTML = `
        <strong class="font-bold">Error !!</strong>
        <span class="block sm:inline">${mensaje} </span>
       `;

    formulario.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes() {
  const terminoBusqueda = document.querySelector('#termino').value;
  const key = '41412780-7a4c7e3d6e34a5b7283f59e99';
  //   Si otra persona revisa mi key .. cargara el api a mi
  //   agregamos el key en template strings y agregamos tambien el termino de la querie &q=
  //   *OJO debemos tener en cuenta el total de (imagenes en este caso ) cosas disponibles para ver como hacer la paginación
  const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosXPagina}&page=${paginaActual}`;
  //   console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(resultado => {
      totalPaginas = calcularPaginas(resultado.totalHits);
      console.log(totalPaginas);
      mostrarImagenes(resultado.hits);
    });
}

// funcion generador que registra la cantidad de elementos dependiendo de las paginas
// la funcion generador se crea con un *

function* crearPaginador(total) {
  console.log(total);
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function calcularPaginas(total) {
  console.log(total);
  // Primero pasamos el total de paginas .. este total sera dinamico ya que el total dependede la API
  // Parseamos a numero porque la API almacena puro string y utilizamos el Math.cell para redondear hacia arriba cualquier falta de imagenes por pagina

  return parseInt(Math.ceil(total / registrosXPagina));
}

function mostrarImagenes(imagenes) {
  //   console.log(imagenes);
  //   Limpiamos cada resultado para que no se encimen las busqueda
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  //   Como es un arreglo de objetos ... podemos iterarlo con un forEach

  imagenes.forEach(imagen => {
    const { previewURL, likes, views, largeImageURL } = imagen;
    // Como estamos iterando debemos poner += para que vaya inyeectando todos los resultados
    resultado.innerHTML += `
    <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 ">
        <div class="bg-white ">
            <img class="w-full" src="${previewURL} "> 
            <div class="p-4" >
                <p class="font-bold"> ${likes} <span class="font-light"> &#128077 </span>     </p>
                <p class="font-bold"> ${views} <span class="font-light">&#128065; </span>     </p>

                <a 
                    class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" 
                    href="${largeImageURL}" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Ver Imagen
                </a>
            </div>
        </div>
    </div>
     `;
  });
  //   Limpiamos el paginador previo

  limpiarPaginador();

  //   Aqui colocamos el paginador y la variableglobal total Pages
  imprimirPaginador();
}
function limpiarPaginador() {
  while (paginacion.firstChild) {
    paginacion.removeChild(paginacion.firstChild);
  }
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);
  //   Este codigo vera cuantos elementos se generan... si hay 1 pagina elimina el codigo anterior y muestra solo 1 pagina

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;
    //caso constrario genera 1 boton por cada elemento en el generador

    const boton = document.createElement('a');
    boton.href = '#';
    // dataset.pagina .. le estamos agregando el atributo data-pagina al html generado .. con el valor del iterador
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      'siguiente',
      'bg-yellow-400',
      'px-4',
      'py-1',
      'mr-2',
      'mb-3',
      'rounded'
    );
    boton.onclick = () => {
      paginaActual = value;

      //   Necesitamos que consulte la API al momento de que le demos click al boton de una paina
      buscarImagenes();
      //   console.log(paginaActual);
    };
    paginacion.appendChild(boton);
  }
}
