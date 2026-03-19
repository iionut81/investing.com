/// <reference types="cypress" />
import RegistrationPage from '../../pages/RegistrationPage';

describe('Registration Functionality', () => {
  beforeEach(() => {
    RegistrationPage.visit();
    RegistrationPage.acceptCookies();
  });

  it('should display registration form with all fields', () => {
    RegistrationPage.openRegistrationForm();
    RegistrationPage.verifyRegistrationFormVisible();
  });

  it('should register with valid data', () => {
    cy.fixture('registration').then((data) => {
      RegistrationPage.register(data.validRegistration);
      RegistrationPage.dismissNotification();
    });
  });

  it('should handle invalid registration data', () => {
    cy.fixture('registration').then((data) => {
      RegistrationPage.register(data.invalidRegistration);
      RegistrationPage.dismissNotification();
    });
  });
});
