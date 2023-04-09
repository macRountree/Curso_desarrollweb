//unir 2 objetos

const producto = {
  nombre: "monitor",
  precio: 300,
  disponible: true,
  //llave :  valor
};

const medidas = {
  peso: "1kg",
  talla: "1metro",
};

console.log(producto);
console.log(medidas);

//object.assing nos permite unir 2 objetos pasandole las varibales de cada objeto
const resultado = Object.assign(producto, medidas);

const resultado2 = { ...producto, ...medidas };
console.log(resultado);

console.log(resultado2);
