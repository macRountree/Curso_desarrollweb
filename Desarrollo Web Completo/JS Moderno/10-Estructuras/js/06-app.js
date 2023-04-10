const user = false;
const canPay = false;
//Tenemos que tener en cuenta el orden de las condiciones
if (user && canPay) {
  console.log("si eres puedes comprar");
} else if (!user && !canPay) {
  console.log("No puedes ccomprar");
} else if (!user) {
  console.log("Inicia Sesion o Registrate");
} else if (!canPay) {
  console.log("Fondos insuficientes");
}
