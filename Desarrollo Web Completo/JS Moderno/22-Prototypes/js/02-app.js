function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const mac = new Cliente("Mac", 300);
const mac2 = new Cliente("Macccc", 1000);
const mac3 = new Cliente("Mak", 500);
console.log(mac, mac2, mac3);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente: ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente: ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(mac));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("Código con Juan", 4000, "Curso en Linea");

console.log(CCJ);
