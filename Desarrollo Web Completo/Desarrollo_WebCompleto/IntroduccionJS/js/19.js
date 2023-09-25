function sumar(n1,n2){
    return n1+n2;
}
// sumar(1 , 6); // EN CONSOLA NO APARECERA NADA .. DEBEMOS INICIALIZAR UNA VARIABLE CON LA FUNCION LLAMADA


const resultado = sumar(1, 6)

console.log(resultado);


let total = 0;

function agregarCarrito (precio){
    return total += precio;
}

function calcularIva(total){
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);


console.log(total);

const totalAlPagar = calcularIva(total);
console.log(`El total con impuestos incluidos es:  $${totalAlPagar}`);