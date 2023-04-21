//?====================ENVIAR EMAIL=====================

document.addEventListener("DOMContentLoaded", function () {
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
    //Si hay un string vacio en los inputs arroja esta vacio si no No esta vacio

    //Se recomienda tener un trim en un formulario para que elimine los espacios en blanco
    if (e.target.value.trim() === "") {
      //podemos poner la alerta aqui pero podemos realizar otra funcion
      mostrarAlerta();
    } else {
      console.log("No esta vacio");
    }
  }

  function mostrarAlerta() {
    //creamos un elemento html
    const error = document.createElement("P");
    //si utilizamos un innerHtml no se escapa.. es mas seguro TextContent
    error.textContent = "Hubo un error";
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
    //Aparecera una etiqueta de p en consola

    //inyectamos errror al formulario
    //appendchild agregamos un nuevo elemento al final de la etiqueta ene este caso del form
    //con innerHtml limpia la pagina
    //form.innerHTML = error.innerHTML;
    form.appendChild(error);
  }
});
