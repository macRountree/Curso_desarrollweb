const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

//**  Consultar vairias API en un mismo proyecto */

const consultarAPI = async () => {
  const resp = await fetch(url);
  const res = await resp.json();
  console.log(res);
  //* Como el await del segundo url debe esperar el primer url se recomienda crear otra funcion asincrona para el url2 O crear un promise.ALL para que se ejecuten las 2 consultas  almismo tiempo
};

const consultarAPI2 = async () => {
  const [res, res2] = await Promise.all([fetch(url), fetch(url2)]);
  const resultado = await res.json();
  const resultado2 = await res2.json();

  console.log(resultado);
  console.log(resultado2);
};

consultarAPI2();
consultarAPI();
