import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Selectors
  get signInButton() {
    return '.login';
  }

  get signInWithEmailButton() {
    return 'Sign in with Email';
  }

  get emailInput() {
    return '[name="email"]';
  }

  get passwordInput() {
    return '[name="password"]';
  }

  get submitButton() {
    return '#signup > .newButton';
  }

  get emailErrorMessage() {
    return '#emailSigningNotify';
  }

  get serverErrorMessage() {
    return '#serverErrors';
  }

  get accountMenu() {
    return '.myAccount';
  }

  get logoutLink() {
    return '#myAccountHeaderPop > div > ul:nth-child(5) > li:nth-child(4) > a';
  }

  // Actions
  openSignInForm() {
    cy.contains('Sign In').click({ force: true });
    cy.contains(this.signInWithEmailButton).click({ force: true });
  }

  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.contains('Sign In').click({ force: true });
  }

  login(email, password) {
    this.openSignInForm();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }

  // Assertions
  verifyLoginSuccess() {
    cy.get(this.accountMenu, { timeout: 15000 }).should('be.visible');
  }

  verifyEmailError(expectedMessage) {
    cy.get(this.emailErrorMessage, { timeout: 5000 })
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  verifyServerError(expectedMessage) {
    cy.get(this.serverErrorMessage, { timeout: 5000 })
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  logout() {
    cy.get(this.accountMenu).trigger('mouseover');
    cy.get(this.logoutLink).invoke('show').click({ force: true });
  }
}

export default new LoginPage();
