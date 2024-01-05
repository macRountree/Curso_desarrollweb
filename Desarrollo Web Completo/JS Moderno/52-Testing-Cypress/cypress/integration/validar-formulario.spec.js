/// <reference types="cypress"/>
describe('Valida el formulario', () => {
  it('Submit al form y mostrar alerta', () => {
    cy.visit('/index.html');
    // Seleccionamos el formulario o el boton submit ... agregamos atributos personalizados en el HTML

    cy.get('[data-cy="formulario"]').submit();
    // seleccionamos laalerta (la agregamos en el JS de alerta)
    cy.get('[data-cy="alerta"]').should('have.class', 'alert-danger');
  });
});
