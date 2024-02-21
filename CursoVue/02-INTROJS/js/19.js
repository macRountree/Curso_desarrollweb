const tech = ['Vue', 'JS', 'Node', 'HTML', 'CSS'];

const vuejs = tech[0];
const js = tech[1];
const html = tech[2];

// console.log(vuejs);
// console.log(js);
// console.log(html);

/*
    *Iteradores de arrays *
    *
  
*/
/*Foreach se Ejecuta la cantidad de veces dependiendo del  

 elemento

**/

const techForEach = tech.forEach(technologia => {
  return technologia;
});

console.log('---------');
//* Map

const techMap = tech.map(technologia => {
  return tech;
});

console.log(techMap);
console.log(techForEach);

/*
 * La diferencia entre forEach y Map esque el primero solo itera los elemeentos de un array
 *
 */
