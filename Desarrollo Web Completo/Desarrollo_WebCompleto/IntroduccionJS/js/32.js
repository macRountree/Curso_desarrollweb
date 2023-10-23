// Async Await
//Es una de las bases del Desarrollo web sobre todo de los Frameworks (React,Angular)

// el async await es como si 2 personas pidieran comidas diferentes con diferentes tiempos por mientras una cosa se cocina la otra orden (una soda) tambien se de ejecute 
function descargarNuevosClientes(){

    return new Promise(resolve =>{
        console.log('Descargando clientes.. espere..');


        //Es 
        setTimeout(() => {
            resolve('Clientes fueron descargados')            
        }, 5000);

    })
}
function descargarUltimosPedidos(){

    return new Promise(resolve =>{
        console.log('Descargando Peiddos.. espere..');


        //Es 
        setTimeout(() => {
            resolve('Peiddos fueron descargados')            
        }, 3000);

    })
}



//Para utilizar async await  debemos crear una funcion con una palabra reservada previa llamada async
//En la vida real puede que los clientes no se descarguen y para eso utilizamos try catch
//sE PUEDE UTILIZAR POR EJEMPLO CUANDO alguien realiza un pago.. puedes bloquear los datos hasta que los cargos esten verificado y despues tener otra funcion de orden lista
async function app(){
    console.log('App lista');

    try {

        //Como tenemos 2 funciones NO dependientes ... debemos crear un arreglo en donde se ejecuten de manera sincrona
        //para eso usamos el Promise.all() el cual es una funcion con arreglos en el cual se ejecutaran en sincronia  siempre y cuando
        //le asignemos el await
        // const res = await descargarNuevosClientes()// le pasamos el await
        // console.log(res);

        const res = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])

        //verificamos que se este termine de ejecutar uno 1 otro .. esto hace que en lugar de tardarse 8 segundos (3 segundos + 5 segundos de cada funcion) se tarde 5 segundos( termina primero el de 3 segundos y 2 segundos despues termina la otra funcion)
        console.log(res[0]);
        console.log(res[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este codigo no se bloquea'); //Si logueamos este mensaje 