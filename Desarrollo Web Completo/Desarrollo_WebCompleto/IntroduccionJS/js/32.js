// Async Await

// 
function descargarNuevosClientes(){

    return new Promise(resolve =>{
        console.log('Descargando clientes.. espere..');

        setTimeout(() => {
            resolve('Clientes fueron descargados')            
        }, 5000);

    })
}



//Para utilizar async await  
//En la vida real puede que los clientes no se descarguen y para eso utilizamos try catch
//sE PUEDE UTILIZAR POR EJEMPLO CUANDO alguien realiza un pago.. puedes bloquear los datos hasta que los cargos esten verificado y despues 
async function app(){
    console.log('App lista');

    try {
        const res = await descargarNuevosClientes()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este codigo no se bloquea');