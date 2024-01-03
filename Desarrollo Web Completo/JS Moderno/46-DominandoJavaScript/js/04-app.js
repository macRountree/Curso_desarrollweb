//  ! implicit binding

// ! se da por implicito donde encontrar su valor

const usueer = {
  nombre: 'Mac',
  edad: 20,
  informacion() {
    // Tenemos que utilizar el this... porque si llamamos la funcion sin esto marca error
    console.log(`Name: ${this.nombre} , edad ${this.edad}`);
  },
  mascota: {
    nombre: 'Doky',
    edad: 5,
    informacion() {
      console.log(`Name: ${this.nombre} , edad ${this.edad}`);
    },
  },
};

usueer.informacion();
usueer.mascota.informacion();
