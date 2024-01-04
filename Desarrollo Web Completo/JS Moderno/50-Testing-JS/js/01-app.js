// Probar 2 valores

function suma(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}

let res = suma(0, 2);
let res2 = restar(6, 2);

let esperado = 2;

expected(esperado).toBe(res);

function expected(esperado) {
  return {
    toBe(res) {
      if (res != esperado) {
        console.error(
          `${res} es diferente a lo esperado ( ${esperado}) no pasó la prueba`
        );
      } else {
        console.log('Laprueba pasó');
      }
    },
    // toEqual(res)
  };
}
