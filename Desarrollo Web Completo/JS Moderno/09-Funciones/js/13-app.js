//Añadir fuciones a un objeto

const reproductor = {
  cancion: "",
  //la propiedad reproducir tiene una funcion y ahora es llamado moetodo de propiedad
  reproducir: (id) => console.log(`Reproduciendo una cancion con el id ${id}`),
  pausar: () => console.log(`Pausando ....`),
  borrar: (id) => console.log(`borrando cancion ${id})`),
  crearPlaylist: (nombre) =>
    console.log(`Creando playlist con el nombre ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproudciendo playlist ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Man who sold the world";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(20);

reproductor.crearPlaylist("Appetitte for Destruction");

reproductor.reproducirPlaylist("Appetitte for Destruction");
