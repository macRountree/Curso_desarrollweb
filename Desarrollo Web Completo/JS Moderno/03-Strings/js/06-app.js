const producto = "monitor";

//Repeat repite una cadena de texto

const texto = "promocion".repeat(3); //redondea si pones 2.4 a 2

console.log(texto);

console.log(`${producto} ${texto}`);

//split() divide un string

const actividad = "stoy aprendiend JS";

console.log(actividad.split("  "));

const hobbies = "leer, caminar, escuchar, musica, programar";

console.log(hobbies.split(",")); //dividimos la cadena por la coma (,) que le asignamos el splitt

const tw = "aprendiend JS moderno con #juan";

console.log(tw.split("#")); //divide strings en este caso el #
