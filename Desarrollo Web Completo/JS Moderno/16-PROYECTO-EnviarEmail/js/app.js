// == PROYECTO EMAIL

document.addEventListener("DOMContentLoaded", () => {
  //Seleccionar los elementos de la interfaz o inputs

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");

  //Listeners
  //el blur se utiliza cuando tenemos selecciono el input (email) y cuando nos salimos se dispara el evento
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  //FUNCIONES

  //En lugar de hacer 3 listeners hacemos 1 funcion para reutilizar codigo ..mandamos la funcion validar a cada listtener

  function validar(e) {
    if (e.target.value.trim() === "") {
      //trim elimina espacios en blanco y se recomienda utilizarlo en formularios
      mostrarAlerta();
    } else {
      console.log("Algo");
    }

    console.log();
  }

  //Funcion mostrar alerta

  function mostrarAlerta() {
    //GENERAMOS ALERTA EN html se recomienda que la etiqueta sea en mayusculas
    const error = document.createElement("P");
    //! AQUI  VIDEO 130 JS moderno
    error.textContent = "Campo Obligatorio";
    // console.log("ALEERTA");
  }
});
