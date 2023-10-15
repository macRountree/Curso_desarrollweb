// == PROYECTO EMAIL

document.addEventListener("DOMContentLoaded", () => {
  //creamos un objeto

  const email = {
    email: "",
    asunto: "",
    cc: "",
    mensaje: "",
  };
  // console.log(email);
  //Seleccionar los elementos de la interfaz o inputs

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");
  const inputCc = document.querySelector("#cc");

  //Listeners
  //el blur se utiliza cuando tenemos selecciono el input (email) y cuando nos salimos se dispara el evento
  // "input " nos da una experiencia en tiempo real que blur que debemos abandonar el campo
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  inputCc.addEventListener("input", validar);
  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    // Reiniciamos el objeto y luego limpiamos el formulario

    resetForm();
  });

  //FUNCIONES

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      resetForm();

      //creeamos alerta
      const alertaSuccess = document.createElement("P");
      alertaSuccess.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaSuccess.textContent = "Mensaje Enviado con éxito";
      formulario.appendChild(alertaSuccess);
      setTimeout(() => {
        alertaSuccess.remove();
      }, 3000);
    }, 3000);
  }

  //En lugar de hacer 3 listeners hacemos 1 funcion para reutilizar codigo ..mandamos la funcion validar a cada listtener

  function validar(e) {
    if (e.target.value.trim() === "" && e.target.id !== "cc") {
      //trim elimina espacios en blanco y se recomienda utilizarlo en formularios
      mostrarAlerta(
        `El campo ${e.target.id} obligario`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    //Para qye solo muestre msg en el email.. debemos extraer su id  y tambien negar que haya algo escrito que no sea la expresion regular
    if (
      (!validarEmail(e.target.value) && e.target.id === "email") ||
      e.target.id === "cc"
    ) {
      mostrarAlerta("Email no válido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //ASIGNAMOS VALORES AL OBJETO
    email[e.target.name] = e.target.value.trim().toLowerCase();
    // console.log(email);

    comprobarEmail();
  }

  //Funcion mostrar alerta

  function mostrarAlerta(mensaje, referencia) {
    //Comprobamos si ya existe una alerta
    //lo podemos hacer con un query selector y seleccionamos si ya tiene alguna clase pero seleccionara todas las clases .. igaul forma eliminaria todas las referencias o inputs
    //le podemos pasar la referencia(el parent element de ese input) para acotar nuestra seleccion
    limpiarAlerta(referencia);

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

  function limpiarAlerta(referencia) {
    // console.log("Desde Limpiar alerta");
    const alerta = referencia.querySelector(".bg-red-600");
    //si existe la alerta la removemos
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    // reg expresion
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    // console.log(resultado);
    return resultado;
  }

  function comprobarEmail() {
    console.log(email);
    // Si el objeto email contiene campos vacios ... si no estan vacios elimina la clase opacity y el disabled
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetForm() {
    email.email = "";
    email.asunto = "";
    email.cc = "";
    email.mensaje = "";
    formulario.reset();
    comprobarEmail();
  }
});
