// Speech API
//

const salida = document.querySelector('#salida');
const mic = document.querySelector('#microfono');

mic.addEventListener('click', ejecutarSpeech);

function ejecutarSpeech() {
  const speechRecogn = webkitSpeechRecognition;
  const recogn = new SpeechRecognition();

  recogn.start();
  recogn.onstart = function () {
    salida.classList.add('mostrar');
    salida.textContent = 'Escuchando.-.';
  };

  recogn.onspeechend = function () {
    salida.textContent = ' Se dejo de grabar';
    recogn.stop();
  };

  recogn.onresult = function (e) {
    console.log(e.results);
  };
}
