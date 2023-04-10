//el    || ES MAS COMUN QUE EL &&

const efectivo = 300;
const credito = 100;

const disponible = efectivo + credito;

const totalPay = 600;

if (efectivo > totalPay || credito > totalPay) {
  console.log("Se ha completado su compra");
} else {
  console.log("Fondos insuficientes");
}
