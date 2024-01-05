/// <reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    cy.visit('/index.html');
    cy.contains(
      '[data-cy="titulo-proyecto"]',
      'Administrador de Pacientes de Veterinaria'
    );
    // Es buena practica utilizar el atributo data-cy para realizar el test
    cy.get('[data-cy="titulo-proyecto"]').should('exist');

    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');
  });
  //   No se deben seleccionar labels, clases , selectores, id
});
