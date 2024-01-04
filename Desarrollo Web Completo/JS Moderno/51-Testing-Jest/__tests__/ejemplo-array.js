const carrit = ['Producto1', 'Producto2'];

describe('Testing al carrito', () => {
  test('Probar que arr tenga 3 elementos', () => {
    expect(carrit).toHaveLength(2);
  });
  test('Probar que arr no este vacio', () => {
    expect(carrit).not.toHaveLength(0);
  });
});
