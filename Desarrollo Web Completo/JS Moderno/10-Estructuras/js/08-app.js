//BUENAS PRACTICAS CON IF

const auth = true;

// NO ES NECESARIO el == true podemos quitarlo
if (auth /*== true*/) {
  console.log("Inicio sesion");
}

const puntos = 500;
//En este caso priorizar los 400 puntos y ponerlo como primer condicion
function check() {
  if (puntos > 400) {
    console.log("Exelente puntaje");
    return; //si se cumple esta condicion el return detiene la lectura
    //SOLO USAR RETURN EN FUNCIONES
  } else if (puntos > 300) {
    console.log("buen puntaje");
    return; //Si no ponemos los 2 returns se ejecutan las 2 condiciones
  }
}
check();
//ESTE CODIGO Con funciones son muy comunes
