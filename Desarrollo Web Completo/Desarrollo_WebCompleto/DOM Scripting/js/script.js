//===SELECCIONAR CONTENIDO HAY 3 muy comunes

// QuerySelector  retorna ninguno o hasta 1 elemento que concuerde con el selector 
const heading = document.querySelector('#heading') //id es con JS .. class con CSS
heading.textContent = 'Nuevo Heading' // agrega un nuevso texto a nuestro query selector
heading.classList.add('nueva__clase')
// console.log(heading);
// QuerySelectorAll  --- desde 0 elementos hasta todos los que se llamen igual

const enlaces = document.querySelectorAll('.navegacion a')

// console.log(enlaces[0]);// Nos arroja el enlaces de la posicion 0 

// enlaces[0].textContent= 'Nuevo enlace';

// enlaces[0].href = 'http://google.com'

// enlaces[0].classList.add('new__class')
// enlaces[0].classList.remove('navegacion__enlace')
// getElementByID  Es similar a los anteriores pero el selector es diferente


const heading2 =document.getElementById('heading') //no es necesario ponerle # o . Ya no se utiliza en JS

// console.log(heading2);


//Generar nuevo enlace

const newLink = document.createElement('A') //se recomienda que el nuevo elemento se en mayuscula

//solo genera el <a><a/> falta agregarle atributos como clases href id etc

//agregando href
newLink.href = 'nuevo-enlace.html'
//agregando texto dentro del <a></a>
newLink.textContent= 'Nuevo link';

//agregando clase

newLink.classList.add('navegacion__enlace')


//Agregamos al documento

const nav = document.querySelector('.navegacion')

nav.appendChild(newLink)

//solo generaremos para que sea mas dinamico
//En la validacion de un formulario lo podemos hacerlo con el DOM scripting



//eventos 

// console.log(1);
//!Window NO es lo mismo que document... windoww esta una escala arriba que el document.. document solo hace referencia al HTML
//? load  espera a que el JS y los archivos que dependen del HTML esten listos
window.addEventListener('load', ()=>{
    // console.log(2);
} )

window.onload = ()=>{
    // console.log(3);
}


document.addEventListener('DOMContentLoaded', ()=>{
    // console.log(4)
})
// console.log(5);


//?DOMContentLoaded espera a que se descargue todo el HTML pero no espera CSS / Imagenes / JS
//? Es mas rapido que load y onload 



window.onscroll= ()=>{
    // console.log('scroll');
}


//Seleccionar elementos y accionar eventos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (e)=>{
//     console.log(e); //cuando hacemos submit a un form .. la accion por defecto es enviar datos
//     e.preventDefault() //Prevenimos que  no se envie automaticamente con preventDefault
//     //si le damos un preventDefault a un enlace no nos enviara a otra pagina .. 
//     // El prevent default es importante para que valide un formulario
//     console.log('Enviando Form');
// })



//Validar un Form

const nombreForm= document.querySelector('#nombre')
const emailForm= document.querySelector('#email')
const msgForm= document.querySelector('#mensaje')
// console.log(nombreForm);
// nombreForm.addEventListener('input', (e)=>{ //podemos validar en tiempo real con input
//     console.log(e);
// } )
// emailForm.addEventListener('input', (e)=>{ //podemos validar en tiempo real con input
//     console.log(e);
// } )
// msgForm.addEventListener('input', (e)=>{ //podemos validar en tiempo real con input
//     console.log(e);
// } )

//?podemos crear un objeto global y usar cada propiedad como los inputs del form
const datos = {
    nombre: '',
    email:'',
    mensaje:''
}
//?simplificamos el código
nombreForm.addEventListener('input', leerTexto)
msgForm.addEventListener('input', leerTexto)
emailForm.addEventListener('input', leerTexto)


//! OJO para tener la validación exitosa debemos crear las llaves del objeto iguales al id que queremos validar

//?===== Eventos en Formularios (Lo utilizamos cuando es obligatoriamente utilizar un input Submit)

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', (e)=>{
     e.preventDefault();
     //validamos  el formulario
     
     //?primero extraemos los valores de uno bjeto/arreglo
     const {nombre,email,mensaje} = datos;
     
     //despues validamos
     
     if (nombre === ''  || email ===''  || mensaje ===''     ) {
        mostrarError('Todos los campos son obligatorios')
        return;// si se cumple este if ... return previene la ejecucuion de tood el codigo
    }

     
    
    //enviar formulario
    envioCorrecto('Datos Enviados Correctamente')

})

//? La buena practica nos dice que debemos utilizar submit
//?En un formulario usamos submit .. pero debemos tener obligatoriamente un input type: submit
//? si escuchamos con un click puede ser cualquier texto o imagen o boton 

// la forma de organizar nuestro codigo es el siguiente

// ==Variables
// == Event Listeners
//¡¡ funciones
function leerTexto(e){
    datos[e.target.id] = e.target.value
    // if(nombreForm === '')
    // console.log(e.target.value); //el e solo muestra la informacion del input... miesntras que el target.value muestra en tiempo real lo que estamos tecleando
// console.log(datos);
}
//mostrar error en pantalla
function mostrarError(mensaje){

    //creamos un HTML para mostrar en la pagina web el mensaje


    const error = document.createElement('P');
    error.textContent  = mensaje;
    error.classList.add('error')
 //Nos creara muchos parrrafos cada que presionamos el boton enviar
formulario.appendChild(error)

//desaparecer la alerta despues de 5 segundos

setTimeout(() => {
    error.remove()
}, 3000);

}



function envioCorrecto(mensaje){

    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto)

    setTimeout(() => {
        correcto.remove()
    }, 3000);
}