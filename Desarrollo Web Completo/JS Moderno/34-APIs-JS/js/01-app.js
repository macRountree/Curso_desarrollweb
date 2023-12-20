// Notificaciones nativas con JS con API de JS

// notificar

const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click', () => {
  //   console.log('click');
  //   Notification API .. el requestPermision es un metodo que le pregunta al usuario si quiere dar permisos para recibir Notificaciones
  Notification.requestPermission().then(resultado => {
    console.log(`Resultado es ${resultado}`);
  });
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    // le pasamos un objeto de icono  para que se muestre una notificacion
    const notif = new Notification('Esta es la notificación', {
      icon: 'img/ccj.png',
      body: 'Aprende con proyectos',
    });

    notif.onclick = function () {
      window.open('https://www.codigoconjuan.com');
    };
  }
});
