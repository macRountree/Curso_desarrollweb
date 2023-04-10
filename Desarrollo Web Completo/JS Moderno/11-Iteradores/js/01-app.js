//ITERADORES
//el codigo se ejecuta se cumpla o se deja de cumplir

//for loop Se ejecuta hasta que un codigo de je de cumplirse

//es una palabra reservada

// i es el inicio del loop, i<10 es donde se acaba, i ++ es el incremento de cada loop en este caso de 1 en 1
for (let i = 0; i <= 20; i += 2) {
  console.log(`numero ${i}`);
}
//Pregunta en un for loop como identificas los numeros que son pares o nones

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(` ${i} es par`);
//   } else {
//     console.log(` ${i} es none`);
//   }
// }

const carrito = [
  { nombre: "monitor", precio: 100, disponible: true },
  { nombre: "teclado", precio: 150, disponible: false },
  { nombre: "mouse", precio: 20000, disponible: true },
  { nombre: "CPU", precio: 20, disponible: false },
  { nombre: "RAM", precio: 200, disponible: true },
];

for (let i = 0; i < carrito.length; i++) {
  //itera cada posicion [] del objeto carrito y muestra su nombre
  console.log(carrito[i].nombre.precio);
}
