// Forloop
 //Esta es su sintaxis.. let i=0 es el indice por donde empieza el ciclo
//  i<=100 es donde acabara el ciclo si el numero pasa de 100.. ya no se ejecutara el ciclo
// i++ quiere decir que ira de 1 en 1 hasta llegar a 100
for(let i = 0; i<=100; i++){ //si queremos saber que numeros son pares o impares.. debemos anidar un if dentro del Loop
   if (i %2 ===0 ) { // Este es el código para ver si un numero es par.. es cuando divides entre 2 queda residuo 0
    console.log(`El numero ${i} es par`);
   }else{
    console.log(`el numero ${i} es impar`);
   }

}

//Tambien podemos barrer arreglo de objetos con un for ( en JS es hace con un foreach o map  comunmente)
const carrito = [
    { nombre: " Monitor 20 pulgadas", precio: 100 },
    { nombre: "Tablet", precio: 700 },
    { nombre: "Audifonos", precio: 700 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 200 },
    { nombre: "Bocinas", precio: 500 },
    { nombre: "LapTop", precio: 100 },
  ];
  

  for(let producto= 0; producto<carrito.length; producto++){
    console.log(carrito[producto]);
  }
// While

let i = 0;  //?inicializas el indice
while (i < 100 ) { //Condicion  para que se ejecute

 if (i%2 ===0) {
    // console.log(`El numero  ${i} es par`);
 }else{
    // console.log(`el numero  ${i} es impar`);
 }
    i++;
}




// Do While

// 
let x= 0; //se ejecuta al menos una vez 

do{
    console.log(x);
    x++;
}while(x<10)
