// ============BUSCADOR DE AUTOS==============//

//========VARIABLES==============
const year = document.querySelector("#year");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor para resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear(); //getfullyear es el año actual
const min = max - 10;

//========OBJETOS==============
//Antes de filtrar las busquedas creamos un objeto
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//========LISTENERS===============
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //muestra los autos al cargar
  //llena la opcion años
  llenarSelect();
});

//listeners para formularios
//usaremos el objeto Datosbusquda para que identifique cada propiedad al seleccionarla
// en el select de cada propiedad
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});

//========FUNCTIONS==============

function mostrarAutos(autos) {
  //limpiamos el html eliminamos el html previo

  limpiarHTML();
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const autosHTML = document.createElement("P");
    autosHTML.textContent = `
    ${marca} 
    ${modelo} 
    ${year}
     -Precio-${precio} 
     - Puertas - ${puertas} 
     - Color - ${color} 
     - Transmision - ${transmision} 
    `;

    //insertamos en el HTML

    resultado.appendChild(autosHTML);
  });
}

//limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

//generamos los años con un select

function llenarSelect() {
  //recorre de LOS AUTOS DEL 2023 HASTA 2013
  for (let i = max; i >= min; i--) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    year.appendChild(opt); //agrega los años al select
  }
}

//Filtrado de autos

function filtrarAuto() {
  //hacemos un filtrad y usamos un metodo avanzado para encadenar mas funciones
  //para el año minimo maximo etc
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  // console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHTML();

  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent =
    "No hay resultados, intenta otros términos de busqueda";
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (marca) {
    return auto.marca == marca;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (year) {
    return auto.year == year;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (minimo) {
    //nos interesa que el objeto de la db sea el de precio .. y que nos muestre el minimo/
    //es decir que sean mayor a un precio seleccionado
    return auto.precio >= minimo;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}
function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (maximo) {
    //nos interesa que el objeto de la db sea el de precio .. y que nos muestre el maximo/
    //es decir que sean menor a un precio seleccionado
    return auto.precio <= maximo;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}
function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (puertas) {
    return auto.puertas == puertas;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}
function filtrarColor(auto) {
  const { color } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (color) {
    return auto.color == color;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  //SI HAY un valor (no vacio) entonces filtro por cada marca
  if (transmision) {
    return auto.transmision == transmision;
  }
  //si no .. me trae todos los autos de regreso
  return auto;
}
