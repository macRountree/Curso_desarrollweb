//* ====BUSCADDOR DE AUTOMOVILES
//?Variables

// 144_3 nos traemos el id resultados del div del html
const resultados = document.querySelector("#resultado");
// 145_3 Nos traemos el id year del select
const year = document.querySelector("#year");
//  146_2 - Agregamos el resto de ids de cada filtro de busqueda

const marca = document.querySelector("#marca");
const precioMinimo = document.querySelector("#minimo");
const precioMaximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// 145_4 creamos un metodo para que nos traiga el año maximo y el minimo
const max = new Date().getFullYear();
const min = max - 10;

// 146_1 Generamos un objeto con la busqueeda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//?=====================Eventos
document.addEventListener("DOMContentLoaded", () => {
  // 144_1 Una vez que cargue nuestro HTML mandamos a llamar nuestra funcion para mostrar los autos
  mostrarAutos(autos); //149_3 Le mandamos el argumento para

  // 145_1 Llena las opciones de años con select

  llenarSelect();
});

//? 146_3 Listeners para select de busqueda Si queremos usar un evento para selects el mas usado es CHANGE

marca.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la marca del objeto datos busqueda
  datosBusqueda.marca = e.target.value;

  // 147_1 llamamos una funcion de filtrado en tiempo real
  filtrarAuto();
});

year.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la year del objeto datos busqueda
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});

precioMinimo.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la minimo del objeto datos busqueda
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});

precioMaximo.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la minimo del objeto datos busqueda
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la transmision del objeto datos busqueda
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la color del objeto datos busqueda
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  // 146_4 asignamos  el evento a la puertas del objeto datos busqueda
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAuto();
});
// ?===========================Funciones
// 144_2 Definimos nuestra funcion mostrarAutos
function mostrarAutos(autos) {
  //149_2 le pasamos un parametro autos
  // 144_4 iteramos los autos del archivo db llamado autos con forEach
  limpiarHTML(); //149_6 Elimina el html previo
  autos.forEach((auto) => {
    // 144_6 desestructuramos autos y los colocamos en el textContent
    const { marca, modelo, precio, color, puertas, transmision, year } = auto;
    const autoHtml = document.createElement("P");
    autoHtml.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} -  Precio: $${precio} - Color: ${color}  `;
    // 144_5 asignamos el elemento creado a resultados
    resultados.appendChild(autoHtml); //149_4 Recordemos que AppendChild NO BORRA  html previo debemos hacerlo con otra funcion
  });
}

// 149_5 Creamos la funcion limpiarHTML mientras que resultado tengo hijos.... removemos estos hijos
function limpiarHTML() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}

// 152_1 creamos una funcion para que arroje un textContent de que no hay resultados... intente otro metodo de filtrado
function noHayResultados() {
  limpiarHTML();
  const noResultado = document.createElement("DIV");

  noResultado.classList.add("alerta", "error", "mb-5");
  noResultado.textContent =
    "No hay  resultado.... Intente con otro método de busqueda";
  resultados.appendChild(noResultado);
}

// 145_2 creamos la funcion llenar select
function llenarSelect() {
  // 145_5 barremos todos los años desde max hasta min
  // console.log(year);
  for (let i = max; i >= min; i--) {
    // console.log(i);

    // 145_6 insertamos los años en el select creando elemento Option ..asignamos el valor del for en esa opcion y tambien su año y lo insertamos en el selected year
    const opcion = document.createElement("OPTION");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

// 147_2 funcion que filtra en base a la busqueda

function filtrarAuto() {
  // 147_3 utilizamos el array metod filter .. utilizamos la funcion de alto nivel es decir
  // crearemos una funcion de filtrar marca y la utilizamos como parametro para esta funcion filter
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMax)
    .filter(filtrarColor)
    .filter(filtrarTransmision)
    .filter(filtrarPuertas); //148_1 podemos encadenar el filtrado poniendo nuevamente el metodo filter
  // console.log(resultado);

  // 149_1 tenemos que mandar llamar la funcion  de mostrarAuto() pero ya con el resultado filtrado
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noHayResultados();
  }
}

// 147_4 creamos una funcion .. esta se integra a la funcion de filtrar auto en el filter de la db
function filtrarMarca(auto) {
  // console.log(auto);
  const { marca } = datosBusqueda;

  // 147_5 filtramos si en nuestro objeto marca  esta vacio nos retorna la marca auto
  if (marca) {
    return auto.marca === marca;
    // console.log(auto.marca);
  }
  // 147_6 Si el usuario no escoja ninguna marca.. se regresa el auto completo
  return auto;
}

// 148_2 Creamos la funcion filtrarYear

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  // 148_3 el year de datos Busqueda viene como String por eso nos arroja que esta vacio.... debemos convertirlo a numero para que se arroje el resultado con parseInt(year) en este caso lo convertimos en el listener de year
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;

  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
function filtrarMax(auto) {
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
