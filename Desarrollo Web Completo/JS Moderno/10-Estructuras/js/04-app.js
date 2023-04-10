///}Operador mayor que  Menor que

const dinero = 300;
const totalPagar = 500;
const tarjeta = true;
const cheque = true;
if (dinero >= totalPagar) {
  console.log("Si podems pagar");
} else if (cheque) {
  console.log("Tengo cheque");
} else if (tarjeta) {
  console.log("tengo Credit card");
} else {
  console.log("Fondos insuficientes");
}
