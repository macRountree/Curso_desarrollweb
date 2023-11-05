function crearIterador(carrito) {
  let i = 0;
  return {
    siguente: () => {
      const fin = i >= carrito.length;
      const valor = !fin ? carrito[i++] : undefined;
      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ['Prod 1', 'prod 2', 'prod 3'];

const barrerCarrito = crearIterador(carrito);
console.log(barrerCarrito.siguente());
