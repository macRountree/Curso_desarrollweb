// Visibility State API

//Se usa por ejemplo cuando dejamos de ver el navegador y se pausa automaticamente el video

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('Ejecuta el video');
  } else {
    console.log('No estas viendo.');
  }
});
