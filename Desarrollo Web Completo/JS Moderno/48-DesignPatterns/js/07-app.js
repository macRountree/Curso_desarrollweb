// Namespaces ayuda a evitar colisiones globales en proyectos grandes

// *

const restaurantApp = {};

restaurantApp.platillos = [
  { platillo: 'Pizza', precio: 25 },
  { platillo: 'Dogo', precio: 50 },
  { platillo: 'Dogo', precio: 50 },
  { platillo: 'Dogo', precio: 50 },
  { platillo: 'Dogo', precio: 50 },
  { platillo: 'Dogo', precio: 50 },
  { platillo: 'Dogo', precio: 50 },
];

console.log(restaurantApp);

restaurantApp.funciones = {
  mostrarMenu: () => {
    console.log('Menu ');
    platillos.forEach((platillo, index) => {
      console.log(`${index} ,  ${platillo.platillo} , $${platillo.precio}`);
    });
  },

  ordenar: id => {
    console.log(`tu platillo es ${restaurantApp.platillos[id].platillo}`);
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };
    restaurantApp.platillos.push(nuevo);
  },
};

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo('Spaguetti', 40);
const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);
