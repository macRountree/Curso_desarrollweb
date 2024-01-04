function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}

describe('Test a funciones suma y resta', () => {
  test('Suma de 20 y 30', () => {
    expect(suma(20, 30)).toBe(50);
  });
  test('Resta de 10 y 5', () => {
    expect(resta(10, 5)).toBe(5);
  });
  test('Suma sea 10 u 10 no sea 10', () => {
    expect(suma(10, 20)).not.toBe(10);
  });
});
