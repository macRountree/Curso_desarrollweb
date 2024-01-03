// Mixins Parents
// ! Froma de agregar funciones

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInfo() {
    console.log(`Nombre Persona : ${nombre} , Email ${email}`);
  },
};
// Añadir function/Persona a la clase Persona

Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('MAc', 'mac@mac.com');
console.log(cliente);
