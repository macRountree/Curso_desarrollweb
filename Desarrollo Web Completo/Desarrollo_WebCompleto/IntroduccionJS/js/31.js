//API DE NOTIFICACIONES DE JS
// ? document hace referencia al HTML del sitio web
const btn = document.querySelector('#boton')


//?hacemos eventos de nuestro sitio web con eventos utilizamos funcion addeventListnerer
//*Notificacion API es una funcion de JS para manipular notificaciones
btn.addEventListener('click',()=>{
      ///Pedimos permiso al usuario para que mande notificaciones
    Notification.requestPermission()
    .then()
});
 //Si el user acepta el permiso de notificaciones
 //Creamos una instancia de Notification con un mensaje
 //utilizamos icon para que se muestro un logo tipo o imagen para q aparezca en la 
 //ventana

if (Notification.permission =='granted') {  
    new Notification('Esta es una notif'),{
        body:'Código con juan'
    }
    
}
console.log(btn);


