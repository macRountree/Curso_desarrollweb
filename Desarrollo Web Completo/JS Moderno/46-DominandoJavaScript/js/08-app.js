// ! SELF
/**
 *  Se refiere a la ventana global .. similar a window
 * Se utiliza ServiceWorkers y PWA
 * Se encuentran algunos casos  donde se utiliza self
 */

self.onload = () => {
  console.log('Ventana lista');
};

const producto = {
  nombre: 'Monitor 20 pulg',
  precio: 20,
  disponible: true,
  mostrarInfo: function () {
    const self = this;
    return `El producto ${self.nombre} tiene un precio-  ${self.precio}`; //si ponemos 'self 'en lugar de this  no funcionara ... ocupamos declarar la variable
  },
};
console.log(producto.mostrarInfo());
