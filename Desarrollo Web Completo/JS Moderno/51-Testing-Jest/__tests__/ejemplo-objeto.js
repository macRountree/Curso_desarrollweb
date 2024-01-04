const cliente = { nombre: 'Mac', balance: 500 };

describe('Testing al cliente', () => {
  test('El cliente es Premium', () => {
    expect(cliente.balance).toBeGreaterThan(400);
  });
  test('El cliente es MAc', () => {
    expect(cliente.nombre).toBe('Mac');
  });
});

// ! Revisar falsos positivos es decir pruebas para que se cumplan valores y tambien para que no se cumplan
