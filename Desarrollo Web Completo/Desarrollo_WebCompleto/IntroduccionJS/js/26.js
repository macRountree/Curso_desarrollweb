//?THIS es una palabra reservada..
//?This va a ser referencia a cada uno de los elementos del objeto
//! Si utilizamos This.. si o si debemos utilizar function() ... no arrow function(()=>{}) porque este hace referencia ala ventana global mientras que function(){} hace referencia alos elementos del objeto
const reservaciones ={
    nombre: 'Mac',
    apellido: 'Rountree',
    total: 500,
    pagado: false,
    info: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
const reservaciones2 ={
    nombre: 'JOJO',
    apellido: 'Jose',
    total: 500,
    pagado: false,
    info: ()=>{
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}


reservaciones.info()
reservaciones2.info()