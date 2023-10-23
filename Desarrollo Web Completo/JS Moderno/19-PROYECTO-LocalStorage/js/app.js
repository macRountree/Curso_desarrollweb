// ? GUARDAR TWEETS LOCAL STORAGE

// ?==============Variables

//===========VARIABLES =====================
const form = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

// 157_1 creamos un arreglo vacio que almacene todos los tweets
let tweetsArr = [];

// ? ============= Event listeners
eventListeners();

function eventListeners() {
  //cuando el usuario agrega nuevo tweet
  form.addEventListener('submit', agregarTweet);

  //Cuando el doc esta listo

  document.addEventListener('DOMContentLoaded', () => {
    //inteneta buscar en local storage tweets yconviertelos en JSON.parse
    // si marca null.. conviertelo a un array vacio
    tweets = JSON.parse(localStorage.getItem('tweets') || []);

    crearHtml();
  });
}

// ? ============== FUnciones

function agregarTweet(e) {
  // 157_2 prevenimos la accion por defaultdel Formulario

  e.preventDefault();

  //text area
  const tweet = document.querySelector('#tweet').value;

  //validar

  if (tweet === '') {
    MostrarError('No puede ir vacio');
    return; //con este return previene que se ejecuten otras lineas de codigo
    //el return solo sirve si esta dentro de una funcion
  }
  // 159_2 utilizamos date.Now() para tener la fecha en tiempo real y creamos un objeto con id con esa fecha y un texto que sera el tweet ecrito
  const tweetObj = {
    id: Date.now(),
    tweet: tweet,
  };

  // Añadir al arreglo de tweets
  // 159_1 utilizamos spreadOperator copiamos todo tweet geenerado con el tweet
  tweetsArr = [...tweetsArr, tweetObj];

  // 159_3 Una vez agregado creamos el HTML

  crearHTML();

  //Reset el formulario

  form.reset();
}

//mostrar error es una funcion que crea un parrafo con su clase
// que se inyectara al html con un mensaje de error
function MostrarError(error) {
  const mensajeError = document.createElement('p');

  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  //insertamos en el contenido

  const contenido = document.querySelector('#contenido');

  //el div contenido se agrega el mensaje hasta el final del dicho div
  contenido.appendChild(mensajeError);
  //elimina el mensaje de alerta en 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//muestra lista de tweets

function crearHtml() {
  if (tweets.length > 0) {
    limpiarHTML();
    //iteramos el arreglo
    tweets.forEach(tweet => {
      //agregamos un boton
      const btnEliminar = document.createElement('a');
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.innerText = 'X';

      //añadimos la funcion de eliminar

      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      const li = document.createElement('li');
      //añadimos texto

      li.innerText = tweet.tweet;

      //asignamos el boton
      li.appendChild(btnEliminar);

      //mientras tenga el appendchild el codigo se repetira
      listaTweets.appendChild(li);
    });
  }
  // 160_1 una vez creado todos los tweets debemos llamar la funcion para almacenarlo en el Storage
  syncStorage();
}

// 160_2 creamos la funcion para agregar tweets al localStorage
function syncStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
//le pasamos el id del objeto tweetObj
function borrarTweet(id) {
  //para borrar un tweet creando un array

  tweets = tweets.filter(tweet => tweet.id != id);

  crearHtml();
}

//limpiar html

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

function mostrarError(error) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  //158_2 insertamos el error en el id contenido

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  // 158_3 Agregamos un setTimeout para que despues de 3 segundos se elimine el mensaje
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function borrarTweet(id) {
  // console.log("borrando", id);
  // 161_2 borramos con filter
  tweetsArr = tweetsArr.filter(tweet => tweet.id !== id);
  // console.log(tweetsArr);
  crearHTML();
}
