//?ARREGLOS

const numeros = [10,20,30,40,50,60]


//! Otra forma de crear arreglos es con el constructor pero es menos comun

const meses = new Array('Enero','Feb','Marzo', 'Abril', 'Mayo');

console.table(meses);


//! En un arreglo podemos almacenar un string/numero/bool/null/ objeto/ otro arreglo

const arreglo = ['hola',10,true,'si',null, {nombre:'Mac', isActive: true}, [1,2,3]]

// console.table(arreglo);
// 


//!Acceder a los valores de un arreglo mediante indices o index

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

//? Conocer la extencion de un arreglo 

// console.log(meses.length);

//! podemos iterar un arreglo si tiene varios elementos
//?Aqui iteramos cada elemento 'mes' en el arreglo meses utilizamos una funcion 

meses.forEach(function(mes){
    // console.log(mes);
})




//? Podemos agregar elementos a un arreglo con métodos


// console.table(numeros.push(70,80,90,100));

// console.table(numeros); 


//? Agregar elementos al inicio del arreglo 

// numeros.unshift(0,-10);

// console.table(numeros);


//? Eliminar elementos Al final del Arreglo

// meses.pop()
// console.table(meses);


//? eliminar elementos al inicio del arreglo

// meses.shift()
// console.table(meses);


//? Eliminar elementos eligiendo un rango 

// meses.splice(1,1);
// console.table(meses);


//!No es recomendable modificar el arreglo original usando estos metodos
//! Es mejor uttilizar el spread operator copiando todos los meses y agregamos junio (parecido al push)


const nuevoArray = ['Diciembre',...meses, 'Junio' ,'Agosto'];

console.table(nuevoArray);
