//=======LOCAL STORAGE=================

//===========VARIABLES =====================
const form = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

//creamos una variable para los arreglos con un arreglo vacio
// se almacenan los datos en una arreglo
let tweets = [];
//===============LISTENERS===================
eventListeners();

function eventListeners() {
  form.addEventListener("submit", agregarTweet);
}

//==============FUNCTIONS?======================
function agregarTweet(e) {
  e.preventDefault();

  //text area
  const tweet = document.querySelector("#tweet").value;

  //validar

  if (tweet === "") {
    MostrarError("No puede ir vacio");
    return; //con este return previene que se ejecuten otras lineas de codigo
    //el return solo sirve si esta dentro de una funcion
  }

  //para diferenciar tweets.. agregamos una fechha en modo de objeto a cada tweet
  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  //añadir al arreglo tweets
  //spread operator
  tweets = [...tweets, tweetObj];

  // ya que creemos el tweet .. generamos el HTML

  crearHtml();
}
//mostrar error es una funcion que crea un parrafo con su clase
// que se inyectara al html con un mensaje de error
function MostrarError(error) {
  const mensajeError = document.createElement("p");

  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //insertamos en el contenido

  const contenido = document.querySelector("#contenido");

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
    //iteramos el arreglo
    tweets.forEach((tweet) => {
      const li = document.createElement("li");
      //añadimos texto

      li.innerText = tweet.tweet;

      listaTweets.appendChild(li);
    });
  }
}

//limpiar html

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
