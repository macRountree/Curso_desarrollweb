/*

*Para unir 2 objetos .. Object.Assing()



*/

//*Otra forma de hacerlo es

const product = {
  nombre: 'Tablet',
  precio: 200,
  isAvailable: true,
};

const client = {
  nombre: 'Mac',

  isPremium: true,
};

const nuevoOb = {
  product,
  client,
};
console.log(nuevoOb);
