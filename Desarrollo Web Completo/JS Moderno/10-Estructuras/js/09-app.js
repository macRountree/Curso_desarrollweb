//OPERADOR TERNARIO

const auth = true;

//REVISAR 2 condiciones en un ternario

const canPay = true;

// la ? es el if y el : es else
console.log(auth || canPay ? "si esta autenticado" : "No. No está autenticado");

//POCO COMUN Ternario anidado

console.log(
  auth
    ? canPay
      ? "si esta auth y puede pagar"
      : "Si esta auth, cant pay"
    : "No estas auth"
);
