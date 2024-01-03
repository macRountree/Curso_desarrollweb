// !Singleton

// Su caracteristica principal es que No nos dejara crear nuevas instancias de una clase
// l
let instancia = null; // creamos una variable null ... y dfentro del constructor condicionamos en que si no existe una instancia nos regresa la intancia actual
//  Esto se refiere a que solamente podremos utilizar una instancia por clase... si utilizamos 2 intancias devolvera  2 resultados con los mismos datos

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    }
    return instancia;
  }
}

const persona = new Persona('Mac', 'mac@gmail.com');
console.log(persona);

const persona1 = new Persona('Charles', 'Char@gmail.com');
console.log(persona1);
