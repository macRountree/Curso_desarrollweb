// *Composition
// ? Es una alternativa al uso de clases (escribir muchas funciones y contruir objetos)
// Es una funcion que se utilizan en diferentes objetos

const obtenerNombre = info => ({
  mostrarNombre() {
    console.log(`Nombre - ${info.nombre} `);
  },
});

const guardarMail = info => ({
  agregarEmail(email) {
    console.log(`Guardando email en : ${info.email}`);
  },
});

function Clientes(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  return Object.assign(info, obtenerNombre(info), guardarMail(info));
}
function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(info, obtenerNombre(info), guardarMail(info));
}

const cliente = Clientes('Juan', null, 'Codigo');
cliente.mostrarNombre();
console.log(cliente);
const empleado = Empleado('Mac', null, 'Codigo');

empleado.mostrarNombre();
