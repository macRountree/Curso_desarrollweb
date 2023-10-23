//? AGREGAMOS ELEMENTOS AL LOCAL STORAge

// 153_1 agremamos elementos a local storage con setItem
// 153_2 La diferencia entre localStorage y Sesion es storage es que sesionStorage los datos se pierden cuando cierro ene el navegador y localStorage siempre se mantiene
//

localStorage.setItem("nombre", 1);
sessionStorage.setItem("nombre", "Mac");

const producto = {
  nombre: 'Monitor 24"',
  precio: 300,
};

const productonString = JSON.stringify(producto);

localStorage.setItem("producto", productonString);

const meses = ["Enero", "Feb", "March"];

const mesesString = JSON.stringify(meses);

localStorage.setItem("meses", meses(JSON.stringify(meses)));
