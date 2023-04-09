//Añadir fuciones a un objeto

const reproductor = {
  //la propiedad reproducir tiene una funcion y ahora es llamado moetodo de propiedad
  reproducir: function (id) {
    console.log(`Reproduciendo una cancion con el id ${id}`);
  },

  pausar: function () {
    console.log(`Pausando ....`);
  },
  borrar: function (id) {
    console.log(`borrando cancion ${id}`);
  },

  crearPlaylist: function (nombre) {
    console.log(`Creando playlist con el nombre ${nombre}`);
  },

  reproducirPlaylist: function (nombre) {
    console.log(`Reproudciendo playlist ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(20);

reproductor.crearPlaylist("Appetitte for Destruction");

reproductor.reproducirPlaylist("Appetitte for Destruction");
