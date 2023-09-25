//! Las funciones son una serie de procedimientos o insturcciones que realizan una acciom
 // Son reutilizables
 //Existen 3 formas de crear funciones

//Primea declaración en el parentesis se agregan los argunmentos
 function  sumar(){
    console.log(10*10);
 }


 //tenemos que llamar la funcion siempre
 sumar()


 //Expresion de la funcion

 const sumar2= function(){
    console.log(5*5);
 }
//  tambien la llamamos
 sumar2()

// funcion autoinvocada
//  ! NO SE RECOMIENDA PARA REUTILIZARSE es para proteger las funciones entre archivos

 (function() {
 
 console.log('Funcion autoinvocada');
 
 })();

 //HOISTING en JS

//  JS se ejecuta en 2 etapas .. la deregistro y la de ejecución
// si son variables decladas como const sumar2 .. la llamada de funcion tiene que ser si o si despues de la declaraciom
// si tienen la declaracion de function al principio entonces si se puede llamar la funcion antes o despues de esta