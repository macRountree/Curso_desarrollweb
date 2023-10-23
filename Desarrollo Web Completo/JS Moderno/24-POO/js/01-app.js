//! POO en JS
//? Solamente es una mejora de JS en object constructor
//las clases crean prototypes mas sencillos

// FORMAS DE CREAR CLASES

// Class declaration
class Cliente {
  constructor(nombre, saldo) {
    // La sintaxis para asignarles valores al objeto es igual que en java
    this.nombre = nombre;
    this.saldo = saldo;
  }
  // Loa metodos de las clases son funciones

  mostrarInfo() {
    return ` Cliente: ${this.nombre} tiene un saldo de ${this.saldo} `;
  }
  //! este metodo pertenece solamente a la clase... no se mostrara si nos la traemos por fuera de esta
  static bienvenida() {
    return 'Bienvenido al Cajero';
  }
}
//  ! clase instanciada
const mac = new Cliente('Mac', 2000);

console.log(Cliente.bienvenida());

// console.log(mac);
// console.log(briana);
// class expresion
const Ciente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const mac2 = new Ciente2();
// console.log(mac2);
