// ? GUARDAR TWEETS LOCAL STORAGE

// ?==============Variables

const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

// 157_1 creamos un arreglo vacio que almacene todos los tweets
let tweetsArr = [];

// ? ============= Event listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
  // cuando el doc esta listo

  document.addEventListener("DOMContentLoaded", () => {
    tweetsArr = JSON.parse(localStorage.getItem("tweets")) || [];
    crearHTML();
  });
}

// ? ============== FUnciones

function agregarTweet(e) {
  // 157_2 prevenimos la accion por defaultdel Formulario

  e.preventDefault();

  // 158_1 declaramos una variable local y accedemos al valor con .value

  const tweet = document.querySelector("#tweet").value;

  if (tweet === "") {
    mostrarError("Un mensaje no puede ir Vacio");
    return;
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

  // 159_4 Reset al formulario
  formulario.reset();

  // console.log(tweetsArr);
}

function crearHTML() {
  limpiarHTML();
  if (tweetsArr.length > 0) {
    tweetsArr.forEach((tweet) => {
      //159_4 creamos un HTML
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";
      // 161_1 añadimos la function eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      const tweetHTML = document.createElement("li");
      //159_5 Añadimos Texto
      tweetHTML.textContent = tweet.tweet;

      tweetHTML.appendChild(btnEliminar);
      listaTweets.appendChild(tweetHTML);
    });
  }
  // 160_1 una vez creado todos los tweets debemos llamar la funcion para almacenarlo en el Storage
  syncStorage();
}

// 160_2 creamos la funcion para agregar tweets al localStorage
function syncStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweetsArr));
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //158_2 insertamos el error en el id contenido

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // 158_3 Agregamos un setTimeout para que despues de 3 segundos se elimine el mensaje
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function borrarTweet(id) {
  // console.log("borrando", id);
  // 161_2 borramos con filter
  tweetsArr = tweetsArr.filter((tweet) => tweet.id !== id);
  // console.log(tweetsArr);
  crearHTML();
}
