//?====================ENVIAR EMAIL=====================

document.addEventListener("DOMContentLoaded", function () {
  //Creamos un objeto para habilitar el boton de enviar
  //los valores deben empezar vacios

  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };
  //Seleccionamos los campos de la interfasz

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const form = document.querySelector("#formulario");
  const btnSubmit = document.querySelector(
    '#formulario button[type= "submit"] '
  );
  const btnReset = document.querySelector('#formulario button[type= "reset"] ');
  const spinner = document.querySelector("#spinner");
  console.log(inputEmail);
  console.log(inputAsunto);
  console.log(inputMensaje);

  //asignar eventos
  //Blur se puede utilizar para validar inputs que no se llenaron
  //añadimos validar como parametro sin mandar a llamar la funcion.. y nos desasemos de los
  //callbacks
  //input es un poco mas en tiempo real es mas rapido que
  inputEmail.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  form.addEventListener("submit", enviarEmail);
  btnReset.addEventListener("click", function (e) {
    //prevenimos su accion default.. es decir reiniciar formulario de btnReset
    e.preventDefault();
    //Reiniciamos el objeto email
    resetForm();
  });

  function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");
    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      resetForm();

      //creamos alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
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
      alertaExito.textContent = "Mensaje Enviado";
      form.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    //ParentElement muestra en consola el elemento padre de los inputs(en este caso)
    //si el input es email entonces el padre sera el div de ese input
    //console.log(e.target.parentElement.nextElementSibling);
    //Si hay un string vacio en los inputs arroja esta vacio si no No esta vacio

    //Se recomienda tener un trim en un formulario para que elimine los espacios en blanco
    if (e.target.value.trim() === "") {
      //podemos poner la alerta aqui pero podemos realizar otra funcion
      //e.target.id hace que la validación sea mas dinamica.. ya que metenmos el id de cada campo en la alerta
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );

      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);

      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    limpiarAlerta(e.target.parentElement);

    //Asignar valores

    email[e.target.name] = e.target.value.trim().toLowerCase();
    //comprobamos el objeto email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    //Comprobamos si ya existe la alerta
    //podemos seleccionar una clase de la alerta (bg-red-600)
    //en lugar de document.quer---- utilizamos la referencia para que sea solo en el div acortando
    const alerta = referencia.querySelector(".bg-red-600");
    console.log(alerta);
    if (alerta) {
      alerta.remove();
    }

    //creamos un elemento html
    const error = document.createElement("P");
    //si utilizamos un innerHtml no se escapa.. es mas seguro TextContent
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
    //Aparecera una etiqueta de p en consola

    //inyectamos errror al formulario
    //appendchild agregamos un nuevo elemento ALFINAL de la etiqueta ene este caso del form
    //con innerHtml limpia la pagina
    //form.innerHTML = error.innerHTML;
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    console.log(alerta);
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    //Expresion regular busca un patron en una cadena de texto
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    //includes verifica si uno de los valores del arreglo estan vacios
    //si hay valores que no estan vacios se quita habilita el boton enviar
    //removiendo opacity y desabilitando disable de ese botonen html
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
    email.mensaje = "";
    form.reset();
    comprobarEmail();
  }
});
