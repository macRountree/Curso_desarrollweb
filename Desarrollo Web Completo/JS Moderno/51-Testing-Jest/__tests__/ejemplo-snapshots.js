const cliente = {
  nombre: 'Mac',
  balance: 500,
  tipo: 'Premium',
};

describe('Test al cliente', () => {
  test('should Mac', () => {
    expect(cliente.nombre).toMatchSnapshot();
  });
});
