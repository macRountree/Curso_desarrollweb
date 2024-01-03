// Mediator o ihntermediario

// Es el patron mas avanzadp
// EL mediador requiere diferentes objetos para comunicarse entre si

function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Artiuclo ${articulo}, con el precio $${precio}`);
  },
  vendido: Comprador => {
    console.log(`Vendido   ${Comprador}`);
  },
};
function Comprador(nombre) {
  this.nombre;
  this.sala = null;
}
Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre} ${cantidad}`);
  },
};
function Subasta() {
  let comprador = {};

  return {
    registrar: usuario => {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    },
  };
}

// Crear objetos

const mac = new Comprador('Mac');
const c = new Comprador('Cjarles');
const vendedor = new Vendedor('Vendor');
const subasta = new Subasta();

vendedor.oferta('Mustang', 66);
mac.oferta(350, mac);
c.oferta(351, c);
vendedor.vendido('Sex');
