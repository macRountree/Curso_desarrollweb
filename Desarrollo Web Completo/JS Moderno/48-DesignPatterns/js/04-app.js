// Factory - crea objeto basado en ciertas CONDICIOINES
// Se utiliza en ciertos casos ...
class inputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id= "${this.nombre}"/> `;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case 'text':
        return new inputHTML('text', nombre);
      case 'email':
        return new inputHTML('email', nombre);

      default:
        return;
    }
  }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');

console.log(inputText.crearInput());

const elemento1 = new HTMLFactory();
const inputText1 = elemento.crearElemento('email', 'mail-cliente');

console.log(inputText1.crearInput());
