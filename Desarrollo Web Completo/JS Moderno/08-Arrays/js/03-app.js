const meses = ["enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

console.table(meses);

//Recorrer un arreglo sin importar su cantidad

//1 Ver cuanto mide el arreglo

console.log(meses.length);

//en el for usamos let para que  cambie su valor..
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
