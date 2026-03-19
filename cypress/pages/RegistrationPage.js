import BasePage from './BasePage';

class RegistrationPage extends BasePage {
  // Selectors
  get registerButton() {
    return '.register';
  }

  get signUpButton() {
    return '#signup > #signUPBtn';
  }

  get firstNameInput() {
    return '#user_firstnameRemark';
  }

  get lastNameInput() {
    return '#in_user_lastname';
  }

  get emailInput() {
    return '#in_user_email';
  }

  get passwordInput() {
    return '#in_password';
  }

  get notificationCloseButton() {
    return '.allow-notifications-popup-close-button';
  }

  // Actions
  openRegistrationForm() {
    cy.get(this.registerButton).click();
    cy.get(this.signUpButton).click();
  }

  fillForm({ firstName, lastName, email, password }) {
    cy.get(this.firstNameInput).clear().type(firstName);
    cy.get(this.lastNameInput).clear().type(lastName);
    cy.get(this.emailInput).clear().type(email);
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.signUpButton).click({ force: true });
  }

  register(userData) {
    this.openRegistrationForm();
    this.fillForm(userData);
    this.submit();
  }

  dismissNotification() {
    cy.get(this.notificationCloseButton, { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  // Assertions
  verifyRegistrationFormVisible() {
    cy.get(this.firstNameInput, { timeout: 5000 }).should('be.visible');
    cy.get(this.lastNameInput).should('be.visible');
    cy.get(this.emailInput).should('be.visible');
    cy.get(this.passwordInput).should('be.visible');
  }
}

export default new RegistrationPage();
