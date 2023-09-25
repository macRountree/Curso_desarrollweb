

const metodoPago = 'Efectivo';
 //Esta es la sintaxis del Switch
switch (metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta');
        break; //Si la condicion tarjeta el break para la condicion
    case 'Cheque':
        console.log('Pagaste con Cheque, Revisaremos Fondos');
        break; //Si la condicion tarjeta el break para la condicion
  
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break; //Si la condicion tarjeta el break para la condicion
  
        
        
    default: //el default es ccomo el Else
        console.log('Aun no has pagado');
        break;
}