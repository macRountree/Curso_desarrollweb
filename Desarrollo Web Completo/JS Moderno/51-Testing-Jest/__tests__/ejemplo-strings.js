const password = '123456';

describe('Valida que el pass no este vacio y tenga una extension de 6 caracteres', () => {
  test('Que el pass tenga 6 caracteres', () => {
    expect(password).toHaveLength(6);
  });

  //   Validar que nuestro password no esté vacio
  test('Password no vacio', () => {
    expect(password).not.toHaveLength(0);
  });
});
