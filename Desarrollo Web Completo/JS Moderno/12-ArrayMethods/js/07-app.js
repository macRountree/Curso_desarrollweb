const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre"];
//CONCAT el orden es importante.. une cada mes depende de acomodo
const res = meses.concat(meses2, meses3);

console.log(res);
//spread operator tambien concatena arreglos si hacemos spread a un string pondraun indice por cada letra
//si ponemos solamente el string sin spread mostrara olamente un indice con dicho string

const resultado2 = [[...meses, ...meses2, ...meses3]];

console.log(resultado2);
