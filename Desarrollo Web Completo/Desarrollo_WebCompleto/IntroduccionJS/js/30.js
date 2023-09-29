//==PROMISES

//*TODAS LAS APIS MODERNAS UTILIZAn PROMISES
//* Un promise refleja un valor que podra estar disponible ahora en un futuro o nunca



//Definimos un promises
//!Cuando se ejecuta un promise se pasan 2 valores automaticamente .. llamado resolve y reject
const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth = true;
    if (auth) {
        resolve('Usuario Auth'); //Sejecuta resolve cuando el promise se cumple
    }else{
        reject('Contraseña Incorrecta') //Se ejecuta si si el promies NO se cumple

    }



})
//!Para utilizar los valores dentro del Promise usamos el then
//? Si queremos veerificar el resultado del resolve mandamos un argumento ala funcion para verificarlo
usuarioAutenticado
.then((function(res){
    console.log(res);
}))
.catch(function(error) {
    console.log(error);
})
/*En los promises existen 3 valores posibles
Pending: No se ha cumplido pero no se rechaza
Fulfilled: Se cumplio el promise
Rejecto: se rechaza  o no se pudo ccumplir el Promise

*/