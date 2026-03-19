/// <reference types="cypress" />
import LoginPage from '../../pages/LoginPage';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.acceptCookies();
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.validUser.email, users.validUser.password);
      LoginPage.verifyLoginSuccess();
    });
  });

  it('should show error for invalid email format', () => {
    cy.fixture('users').then((users) => {
      const { email, password, expectedError } = users.invalidEmailFormat;
      LoginPage.login(email, password);
      LoginPage.verifyEmailError(expectedError);
    });
  });

  it('should show error for wrong credentials', () => {
    cy.fixture('users').then((users) => {
      const { email, password, expectedError } = users.wrongCredentials;
      LoginPage.login(email, password);
      LoginPage.verifyServerError(expectedError);
    });
  });

  it('should show error for non-existent email', () => {
    cy.fixture('users').then((users) => {
      const { email, password, expectedError } = users.nonExistentEmail;
      LoginPage.login(email, password);
      LoginPage.verifyEmailError(expectedError);
    });
  });

  it('should show error when email is empty', () => {
    cy.fixture('users').then((users) => {
      const { password, expectedError } = users.emptyEmail;
      LoginPage.openSignInForm();
      LoginPage.fillPassword(password);
      LoginPage.submit();
      LoginPage.verifyEmailError(expectedError);
    });
  });

  it('should show error when password is empty', () => {
    cy.fixture('users').then((users) => {
      const { email, expectedError } = users.emptyPassword;
      LoginPage.openSignInForm();
      LoginPage.fillEmail(email);
      LoginPage.submit();
      LoginPage.verifyServerError(expectedError);
    });
  });

  it('should login and logout successfully', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.validUser.email, users.validUser.password);
      LoginPage.verifyLoginSuccess();
      LoginPage.logout();
    });
  });
});
