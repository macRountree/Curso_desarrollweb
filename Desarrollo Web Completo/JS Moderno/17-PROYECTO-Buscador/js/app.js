// ============BUSCADOR DE AUTOS==============//

//========VARIABLES==============
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
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

function llenarSelect() {}
