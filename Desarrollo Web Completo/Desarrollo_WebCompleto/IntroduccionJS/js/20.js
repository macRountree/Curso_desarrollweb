//!Metodos de Propiedad
// ! Son muy utiles porque mantienen toda la info en un solo objeto


const reproductor = {

    reproducir: function(id){
        console.log(`Reproduciendo Cancion con id ${id}`);
    },

    pausar: function(){
        console.log('Pausando');
    },

    crearPlaylist: function(nombre){
        console.log(`Creando una playlist con el nombre: ${nombre}`);
    },
    ReproducirPlaylist: function(nombre){
        console.log(`Reproduciendo una playlist con el nombre: ${nombre}`);
    }
} 

//Podemos agregar propiedades por fuera del objeto

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`);
}


//Asi llamamos la funcion 

reproductor.reproducir(3840);
reproductor.pausar()
reproductor.borrarCancion(26);
reproductor.crearPlaylist('Heavy Metal')
reproductor.ReproducirPlaylist('RlxMac')

console.table(reproductor);