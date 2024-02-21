//*Arrow Funct

const sumar = (numero1 = 0, num2 = 3) => {
  console.log(numero1 + num2);
};

sumar(1, 5);

const tech = ['vue', 'js', 'html'];

const arrayMap = tech.map(tech => tech);

console.log(arrayMap);

const tec2 = tech.filter(tech => tech != 'html');

console.log(tec2);
