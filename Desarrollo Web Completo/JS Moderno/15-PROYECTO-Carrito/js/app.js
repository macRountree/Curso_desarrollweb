//!PROYECTO CARRITO DE COMPRAS

// ==VARIABLES

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = []; //Se declara let porque el arreglo ira cambiando

//Listeners

//==FUNCIONES
const cargarEventListeners = () => {
  //Evento ocurre cuando damos click en Agregar al Carrito
  listaCursos.addEventListener("click", agregarCurso);
};

const agregarCurso = (e) => {
  e.preventDefault(); //Mantiene elmovimiento de la pagina
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSelected = e.target.parentElement.parentElement; //Seleccionamos el padre de agregar carrito(infocard) y despues otro padre
    leerDatosCurso(cursoSelected);
  }
};

cargarEventListeners();

//Lee el contenido de html del listener y extraemos su info
const leerDatosCurso = (curso) => {
  // console.log(curso);
  //Creamos un objeto con el contenido del curso actual

  const infoCurso = {
    imagen: curso.querySelector("img").src, //Extraenmos la imagen utilizando el parametro curso y con img extraemos el src
    titulo: curso.querySelector("h4").textContent, //Seleccionamos el titulo que esta dentro de un h4 y su texto
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"), //Seleccionamos el id del html con el label <a></a> y extraemos el attribute data-id para mostrar id diferentes
    cantidad: 1, //cuando agreguemos algo a un carrito agregamos 1
  };

  //Revisamos si existe el producto en el carrito con some() nos permite iterar en un arreglo de eobjetos
  const exist = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  console.log(exist);

  //?Agregamos elementos a carrito

  articulosCarrito = [...articulosCarrito, infoCurso]; //usamos spread para agregar infocurso a articuilosCarrito
  console.log(articulosCarrito);
  carritoHTML();
};

//muestra el carrito en HTML
//Lo recorremos con foreach y la funcionCarritoHTML la llamamos dentro de la funct leerDatos

const carritoHTML = () => {
  //Limpiamos el HTML para que no duplique objetos del mismo producto
  limpiarHTML();
  //
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    const { imagen, id, titulo, precio, cantidad } = curso;
    //Agregamos tds al contendor tbdoy de contenedor carrito El aCOMODO ES IMPORTANTE
    row.innerHTML = ` 
    <td>
    <img src="${imagen}" class="curso-img"></img>
 
    </td>
    <td>
    ${titulo}
    </td>        
    
    <td>
    ${precio}
    </td>
    
    <td>
    ${cantidad}
    </td>
    <td>
     <a href="#" class="borrar-curso" data-id="${id}"> X </a>
    </td>
    `;
    //agrega HTML del carrito en  tbody

    contenedorCarrito.appendChild(row); //agregamos el row a tbody que declaramos en contenedorCarrito
  });
};

//Elimina Cursos de tbodybv

const limpiarHTML = () => {
  // contenedorCarrito.innerHTML = ""; //forma lenta de eliminar duplicado de objetos
  while (contenedorCarrito.firstChild) {
    //si en contenendor carrito (tbody) haya un hijo
    contenedorCarrito.removeChild(contenedorCarrito.firstChild); //Eliminamos el primero hijo de dicho tbody
  }
};
