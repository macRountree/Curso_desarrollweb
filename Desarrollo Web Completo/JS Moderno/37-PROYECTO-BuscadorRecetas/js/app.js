// Proyecto Recetas
// *LLevarlo a async await

function iniciarApp() {
  // ?==============VARIABLES========
  const selectCategorias = document.querySelector('#categorias');
  const resultado = document.querySelector('#resultado');

  if (selectCategorias) {
    selectCategorias.addEventListener('change', seleccionarCategoria); //Change lo usamos en los select
    // Inicia con las categorias en el select de categorias consulta las API
    obtenerCategorias();
  }
  const favDiv = document.querySelector('.favoritos');
  if (favDiv) {
    obtenerFav();
  }
  const modal = new bootstrap.Modal('#modal', {});

  function obtenerCategorias() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    //    El fetch API tiene el método GET por default pero para hacer un POST se realiza diferente
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(result => {
        mostrarCategorias(result.categories);
      });
  }
  // * Funcion para colocar las categorias de la API al select de categorias
  function mostrarCategorias(categorias = []) {
    // El parametro categorias debe ser un arreglo
    categorias.forEach(categoria => {
      const { strCategory } = categoria;

      const option = document.createElement('OPTION'); //La etiqueta option va siempre dentro del select
      option.value = strCategory; //le asignamos el el nombre de la categoria al atributo de option
      option.textContent = strCategory;
      //   renderizamos en el HTML

      selectCategorias.appendChild(option);
      //   console.log(option);
      //   console.log(categoria);
    });
  }

  function seleccionarCategoria(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`; //el endpoint al final viene un nombre... le colocamos un Tstring con el nombre de la categoria seleccionada
    // utilizamos fetch para esa categoria seleccionada y poder mostrarla en el HTML

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(res => mostrarRecetas(res.meals));
  }

  function mostrarRecetas(recetas = []) {
    // Antes de generar todo lo relacionado con las cards de recetas  debemos limpiar el HMTML
    LimpiarHTML(resultado);

    const heading = document.createElement('H2');
    heading.classList.add('text-center', 'text-black', 'my-5');
    heading.textContent = recetas.length ? 'Resultados' : 'No hay Resultados';
    resultado.appendChild(heading);

    // Iteramos resultados
    recetas.forEach(receta => {
      const { idMeal, strMeal, strMealThumb } = receta;
      const recetaContainer = document.createElement('DIV');
      recetaContainer.classList.add('col-md-4');
      //  creamos el card para cada receta
      const recetaCard = document.createElement('DIV');
      recetaCard.classList.add('card', 'mb-4');

      const recetaImg = document.createElement('IMG');
      recetaImg.classList.add('card-img-top');
      recetaImg.alt = `Imagen Receta ${strMeal ?? receta.title}`;
      recetaImg.src = strMealThumb ?? receta.img;

      //   cada card debe tener un body

      const recetaCardBody = document.createElement('DIV');
      recetaCardBody.classList.add('card-body');

      const recetaHeading = document.createElement('H3');
      recetaHeading.classList.add('card-title', 'mb-3');
      recetaHeading.textContent = strMeal ?? receta.title;

      const recetaButton = document.createElement('BUTTON');
      recetaButton.classList.add('btn', 'btn-danger', 'w-100');
      recetaButton.textContent = 'Ver Receta';
      //   recetaButton.dataset.bsTarget = '#modal';
      //   recetaButton.dataset.bsToogle = 'modal';

      recetaButton.onclick = function () {
        seleccionarReceta(idMeal ?? receta.id);
      };
      //   Inyectamos todo tENEMOS QUE TOMAR EN CUENTA EL ORDEN DE INYECCION

      recetaCardBody.appendChild(recetaHeading);
      recetaCardBody.appendChild(recetaButton);
      recetaCard.appendChild(recetaImg);
      recetaCard.appendChild(recetaCardBody);

      recetaContainer.appendChild(recetaCard); //Como recetaContainer tambien lo creamos .. debemos agarar en div real de nuestro HTML para inyectare este container a ese div
      resultado.appendChild(recetaContainer);
      //   console.log(recetaHeading);
      //   console.log(recetaContainer);
      //   console.log(recetaCard);
      //   console.log(recetaImg);
    });
  }
  function seleccionarReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url).then(resp =>
      resp.json().then(res => {
        mostrarRecetaModal(res.meals[0]);
      })
    );
  }
  function mostrarRecetaModal(receta) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = receta;
    const modalTitle = document.querySelector('.modal .modal-title');
    const modalBody = document.querySelector('.modal .modal-body');

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
     <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
     <h3 class="my-3">Instrucciones</h3>
     <p>${strInstructions}</p>
     <h3 class="my-3">Ingredientes y Cantidades</h3>
    `;

    const listGroup = document.createElement('UL');
    listGroup.classList.add('list-group');

    // Mostrar Cantidades e ingredientes
    for (let i = 1; i <= 20; i++) {
      // en el objeto de receta barremos cada ingrediente(strIngredient) que haya y sus cantidades(strMeasure)
      // empezamos con el primero y vamos mostrando en el modal cada ingrediente con su respectiva cantidad
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        const ingredienteLi = document.createElement('LI');
        ingredienteLi.classList.add('list-group-item');
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
        listGroup.appendChild(ingredienteLi);
      }
    }

    // Agregamos todo el listGroup al modal body
    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector('.modal-footer');
    // Limpiamos el HTML del footer si no limpiamos .. se inyectaran los botones de cerrar y fav

    LimpiarHTML(modalFooter);

    // Añadir botones Cerrar y Favorito
    const btnFav = document.createElement('BUTTON');
    btnFav.classList.add('btn', 'btn-danger', 'col');
    btnFav.textContent = existeLocalStorage(idMeal)
      ? 'Eliminar Favorito'
      : 'Guardar Favorito';
    // Almacenamos en local storage

    btnFav.onclick = function () {
      // Si en el local storage YA existe un id de X receta ... entonces no se almacena en LS cuando guardemos en favoritos
      if (existeLocalStorage(idMeal)) {
        eliminarFav(idMeal);
        btnFav.textContent = 'Guardar Favorito';
        mostrarToast('Eliminado Correctamente');
        return;
      }
      agregarFav({
        id: idMeal,
        title: strMeal,
        img: strMealThumb,
      });
      btnFav.textContent = 'Eliminar Favorito';
      mostrarToast('Agregado Correctamente');
    };

    const btnClose = document.createElement('BUTTON');
    btnClose.classList.add('btn', 'btn-secondary', 'col');
    btnClose.textContent = 'Cerrar';
    // Utilizamos onclick como  listener porque estamos generando este boton con JS
    btnClose.onclick = function () {
      modal.hide(); // Tenemos una instancia global de Bootsrap y la mandamos llamar para que cierre el modal
    };

    modalFooter.appendChild(btnFav);
    modalFooter.appendChild(btnClose);

    // Mostrar modal
    modal.show();
  }

  function agregarFav(receta) {
    // seteamos el Local storage
    // Favoritos lo convertimos en un arreglo para ello usamos el JSON.parse

    // * "??" es una expresion.. donde la parte de JSON.parse marque null (lado izq) .. va a setear el [] (lado derecho)
    const fav = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    localStorage.setItem('favoritos', JSON.stringify([...fav, receta]));
    // console.log('Agregando');
  }

  function eliminarFav(id) {
    const fav = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    const nuevosFav = fav.filter(fav => fav.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFav));
  }

  function existeLocalStorage(id) {
    const fav = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    return fav.some(fav => fav.id === id);
  }

  function mostrarToast(mensaje) {
    const toastDIV = document.querySelector('#toast');
    const toastBody = document.querySelector('.toast-body');
    const toast = new bootstrap.Toast(toastDIV);
    toastBody.textContent = mensaje;
    toast.show();
  }
  function obtenerFav() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    // Si hay favoritos el if los mostrara
    if (favoritos.length) {
      mostrarRecetas(favoritos);
      return;
    }
    // Si no hay favoritos cremos un parrafo que muestre que aun no hay recetas fav
    const noFav = document.createElement('P');
    noFav.textContent = 'Aun no tienes recetas favoritas';
    noFav.classList.add('font-bold', 'text-center', 'fs-4', 'mt-5');
    favDiv.appendChild(noFav);
  }
  function LimpiarHTML(selector) {
    // Si queremos que nuestra limpieza sea mas dinamica le pasamos como parametro el selector que uqeremos limpiar
    // Asi solo le pasamos el parametro a ciertas funciones de nuestra app en este caso seria para el resultado de la buscqueda de recetas
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp);

//? ===========FUNCIONES========
