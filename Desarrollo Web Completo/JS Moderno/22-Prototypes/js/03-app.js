function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// El function busca en el objeto actual .... el arrow function busca en el global

Cliente.prototype.tipoCliente = function () {
  //   console.log("desde proto");
  let tipo;
  // evalua el saldo del cliente y le asigna el tipo de cliente
  if (this.saldo > 11000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "normal";
  }
  return tipo;
};

// instanciamos

const pedro = new Cliente("pedro", 16000);

console.log(pedro.tipoCliente());
pedro.tipoCliente();
