class BasePage {
  get cookieAcceptButton() {
    return '#onetrust-accept-btn-handler';
  }

  get popupCloseIcon() {
    return '.popupCloseIcon';
  }

  acceptCookies() {
    cy.get(this.cookieAcceptButton).should('be.visible').click();
  }

  dismissPopup() {
    cy.get('body').then(($body) => {
      if ($body.find(this.popupCloseIcon).length > 0) {
        cy.get(this.popupCloseIcon).first().click({ force: true });
      }
    });
  }

  visit() {
    cy.visit('/');
  }
}

export default BasePage;
