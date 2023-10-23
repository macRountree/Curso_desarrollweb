async function obtenerEmpleados(){
    //por buenas practicas colocamos la URL en una variable
    const archivo = 'js/empleados.json'
    fetch(archivo)
    .then(res =>{
        return res.json()
    
    }).then(datos=>{
        const {empleados}= datos;
        console.log(empleados);
        //queremos iterar nomas.. usamos forEach

        empleados.forEach( empleado =>{
            console.log(empleado.id);
            console.log(empleado.nombre);
            console.log(empleado.puesto);
            document.querySelector('.contenido').textContent = empleado.nombre
        })
    } )
}

obtenerEmpleados();

//! Status 200 quiere decir que la peticion fue correcta
//! STATU 404 no pudo encontrar 
//! XML no se puede usar fetch