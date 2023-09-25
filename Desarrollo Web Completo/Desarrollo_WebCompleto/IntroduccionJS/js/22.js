// Estructuras de control - IF


const puntaje = 100;

if (puntaje !== 100) {
    console.log('No es 100');
}else{
    console.log('El puntaje si es 100'); 
}


const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {       
    console.log('Usuario puede pagar');
}else{
    console.log('Fondos insuficientes');
}

//!no es recomendable que esten demasiados if else.. en este caso usariamos el switch

const rol = 'nada'

if (rol === 'Admin') {
    console.log('Acceso a todo el sistema');    
}else if (rol === 'Editor') {
    console.log('Eeres editorm no puedes acceder');
} else {
    console.log('Cerrando Sesion');
}