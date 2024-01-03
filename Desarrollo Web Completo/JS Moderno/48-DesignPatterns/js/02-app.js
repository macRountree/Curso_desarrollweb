// !Constructor Pattern
class Persona {
  constructor(nombre, emai) {
    this.nombre = nombre;
    this.emai = emai;
  }
}

// En Js no hay soporte de clases abstractas

//

class Cliente extends Persona {
  constructor(nombre, emai, empresa) {
    super(nombre, emai);

    this.empresa = empresa;
  }
}

const cliente = new Cliente('Miguel', 'cliente@client.com', 'Mac');

console.log(cliente);
