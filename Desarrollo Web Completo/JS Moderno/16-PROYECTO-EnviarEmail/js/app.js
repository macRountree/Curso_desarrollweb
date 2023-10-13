// == PROYECTO EMAIL

document.addEventListener("DOMContentLoaded", () => {
  //Seleccionar los elementos de la interfaz o inputs

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //Listeners
  //el blur se utiliza cuando tenemos selecciono el input (email) y cuando nos salimos se dispara el evento
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  //FUNCIONES

  //En lugar de hacer 3 listeners hacemos 1 funcion para reutilizar codigo ..mandamos la funcion validar a cada listtener

  function validar(e) {
    console.log(e.target.parentElement);
    if (e.target.value.trim() === "") {
      //trim elimina espacios en blanco y se recomienda utilizarlo en formularios
      mostrarAlerta(
        `El campo ${e.target.id} obligario`,
        e.target.parentElement
      );
    } else {
      console.log("Algo");
    }

    console.log();
  }

  //Funcion mostrar alerta

  function mostrarAlerta(mensaje, referencia) {
    //GENERAMOS ALERTA EN html se recomienda que la etiqueta sea en mayusculas
    const error = document.createElement("P");
    error.textContent = mensaje;
    //al error le agregamos una clase de fondo rojo para que se vea llamativo
    error.classList.add("bg-red-600", "text-center", "text-white", "p-2");
    //appendchidl agrega un nuevo elemento a lo ya existente
    referencia.appendChild(error);

    //Como el aviso de erro no es llamativo le agregamos estilos

    // console.log("ALEERTA");
  }
});
