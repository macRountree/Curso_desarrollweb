// ============BUSCADOR DE AUTOS==============//

//========VARIABLES==============
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

//========LISTENERS===============
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
  //llena la opcion años
  llenarSelect();
});

//========FUNCTIONS==============

function mostrarAutos() {
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
