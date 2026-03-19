// Custom commands for reusable actions across tests

Cypress.Commands.add('acceptCookies', () => {
  cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
    .should('be.visible')
    .click();
});

Cypress.Commands.add('dismissPopup', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.popupCloseIcon').length > 0) {
      cy.get('.popupCloseIcon').first().click({ force: true });
    }
  });
});

Cypress.Commands.add('loginWithEmail', (email, password) => {
  cy.contains('Sign In').click({ force: true });
  cy.contains('Sign in with Email').click({ force: true });
  cy.get('[name="email"]').clear().type(email);
  cy.get('[name="password"]').clear().type(password);
  cy.contains('Sign In').click({ force: true });
});
