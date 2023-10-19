class Cliente {
  #nombre;

  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
}

const mac = new Cliente('Mac', 2000);
// Utilizando sett y get para nuestro nombre privado... hara que no nos  muestre error y
mac.setNombre('Mac');
console.log(mac.getNombre());
