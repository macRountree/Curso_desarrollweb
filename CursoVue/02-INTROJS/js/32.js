const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

// ASync Await
//*Syntaxis async Aswait es mas corta que Promises

const consultarAPI = async () => {
  fetch(url)
    .then(resp => resp.json())
    .then(res => console.log(res));
  // .catch(error => console.log(error));
  // .finally(() => {
  //   console.log('Listo');
  // });

  try {
    //*podemos crear una variable
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log('Liste');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Listo');
  }
};

consultarAPI();
