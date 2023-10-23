


const num1 = 20
const num3 = 200

// El codigo deja de funcionar en todo el proyecto si hay un errror
//Podemos utilizar un try catch para que espere un error y se ejecute el resto
//*SOLO SE UTILIZA EN SITUACIONES ESPECIFICA ... si un usuario pudo o no iniciar sesion, si una conexion a DB se logro o si un pago se completo o no
//*SOLO EN SITUACIONES CRITICAS

console.log(num1);
try {
    
    console.log(num2);

} catch (error) {
    console.log(error);
}
console.log(num3)