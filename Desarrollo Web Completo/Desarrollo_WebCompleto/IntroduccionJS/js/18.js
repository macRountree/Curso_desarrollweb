//!Parametros y Argumentos

function  sumar(num1=0, num2=0){ //estos son parametros Van dentro de la funcion
    console.log( num2+ num1); //aunque aqui se cambien los parametros.. sera siempre 10 el num 1 y 20 num2
 }


 sumar(10, 20); //Cuando llamamos la funcion  dentro de ella van los argumentos(valores reales)
// si solo mandamos 1 cuando tenemos un parametro ... tendra un NaN
//si declaramos parmetros por default podemos dejar en blanco 1 de los 2 argumentos  


 const sumar2= function(n1 ,n2){
    console.log(n2*n1);
 }
 sumar2(2, 63)
