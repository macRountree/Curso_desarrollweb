/*
 * ObJeto es una coleccion de propiedades y cada prop es una asociacion clave
 */

const nombreProducto = 'tablet';
const precioProducto = 300;
const disponible = true;

const product = {
  name: 'tablet',
  precio: 300,
  isAvailable: true,
};

console.table(product);

//*Acceder al objeto

console.log(product.name);

//*Destructuring

const {isAvailable} = product;

console.log(isAvailable);

//*Objetc literal enhancment

const auth = true;
const user = 'Mac';

const obj = {
  auth: auth,
  user: user,
};

console.log(obj);
