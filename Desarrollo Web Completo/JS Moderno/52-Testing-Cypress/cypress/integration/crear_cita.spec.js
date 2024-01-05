/// <reference types="cypress"/>
describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    cy.visit('/index.html');
    cy.get('[data-cy=mascota-input]').type('hook');
    cy.get('[data-cy=propietario-input]').type('Mac');

    cy.get('[data-cy=telefono-input]').type('6622277834');
    cy.get('[data-cy=fecha-input]').type('2020-12-03');

    cy.get('[data-cy=hora-input]').type('20:30');

    //   No se deben seleccionar labels, clases , selectores, id
  });
});
