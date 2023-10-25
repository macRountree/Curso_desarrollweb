// ! ====WEAKSET
const weakset = new WeakSet(); //Solamente le podemos pasasr objetos y no son iterables

const cliente = {
  nombre: 'Juan',
  saldo: 100,
};

weakset.add(cliente);

console.log(weakset.has(cliente.nombre));
