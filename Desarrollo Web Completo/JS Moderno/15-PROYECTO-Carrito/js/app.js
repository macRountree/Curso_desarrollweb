// ===========PROYECTO CARRITO===========

//VARIABLES
//usamos querySelector porq nomas tenemos 1 carrito
//seleccionamos todos los ids que esten dentro del carrito
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCart = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

cargarEventos();
function cargarEventos() {
  //Cuando damos click en Agregar al carrito
  listaCursos.addEventListener("click", agregarCurso);
}

//Functions

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSelec = e.target.parentElement.parentElement;

    leerDatos(cursoSelec);
  }
}

//leer el contenido del html y le dimos click y extrae info del curso

function leerDatos(curso) {
  console.log(curso);

  //creamos un objetos con el contenido del curso actual

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  console.log(infoCurso);
}
