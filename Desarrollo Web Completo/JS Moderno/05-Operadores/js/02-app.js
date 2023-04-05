const numero1 = 30;

const numero2 = 350;

const numero3 = "30";

//Revisar si 2 numeros son iguales

console.log(numero1 == numero3); //se debe tener 2  == para comparar
console.log(numero1 == numero3); // si los pone igual aunque sea un string

//comparador estricto

console.log(numero1 === numero3); //3 iguales es mas estricto ya checa el tipo de dato

console.log(numero1 === parseInt(numero3)); //si convertimos el string a entero si son iguales

//comparador de diferencia

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

console.log(numero1 != numero3); //pone False es decir son iguales ya que no es estricto
console.log(numero1 !== numero3); //Es true osea son estrictamente diferentes
