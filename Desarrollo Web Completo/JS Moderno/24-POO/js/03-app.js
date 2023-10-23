class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInfo() {
    return ` Cliente: ${this.nombre} tiene un saldo de ${this.saldo} `;
  }
  static bienvenida() {
    return 'Bienvenido al Cajero';
  }
}

//! Herencia
// ! Empresa es una clase hijo de cliente
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    // Utilizamos super que es el constructor que recibe las propiedades de la clase Padre Cliente
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida() {
    return 'Bienvenido al Cajero de empresas';
  }
}

const mac = new Cliente('Mac', 2000);
const empresa = new Empresa('VileoSoft', 600, 662227, 'Ventas');

console.log(empresa);
console.log(Empresa.bienvenida());
