//?====================ENVIAR EMAIL=====================

document.addEventListener("DOMContentLoaded", function () {
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

  console.log(inputEmail);
  console.log(inputAsunto);
  console.log(inputMensaje);

  //asignar eventos
  //Blur se puede utilizar para validar inputs que no se llenaron
  //añadimos validar como parametro sin mandar a llamar la funcion.. y nos desasemos de los
  //callbacks
  inputEmail.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);

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
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
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
    console.log(Object.values(email).includes(""));
  }
});
