//Arrow functions hace que la sintaxis sea mas corta

const learning = function () {
  console.log("aprendinedo JS");
};

learning();

//el function se transforma en un arrow y se traslada enseguida del parentesis
//NO OCUPA LLAVES podemos enviar al a consolasin llaves en caso de ser solo 1 linea
const learning2 = () => console.log("aprendinedo JS arrow");
learning2();

//Tambien no hay necesidad de declarar return siempre y cuando lo
//llamamemos fuera de la funcion con el consolo log en este caso
const learning3 = () => "aprendinedo JS arrow";

console.log(learning3());
