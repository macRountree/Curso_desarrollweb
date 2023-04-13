//? ====================EVENTOOOSS=====================

console.log(1);

//El codigo con DOM content se ejecutara al final porque tiene que esperar a que se descargue todo en el DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
});

console.log(3);
