const learning = function (lenguaje, lenguaje2) {
  console.log(`aprendinedo ${lenguaje} y ${lenguaje2}`);
};

learning("SQL", "Mongo");

//el function se transforma en un arrow y se traslada enseguida del parentesis
//NO OCUPA LLAVES podemos enviar al a consolasin llaves en caso de ser solo 1 linea
const learning2 = () => console.log("aprendinedo JS arrow");
learning2();

//Tambien no hay necesidad de declarar return siempre y cuando lo
//llamamemos fuera de la funcion con el consolo log en este caso
const learning3 = (tecnologia, tecnologia2) =>
  `aprendiando ${tecnologia} con ${tecnologia2}`;

console.log(learning3("Py", "flask"));
