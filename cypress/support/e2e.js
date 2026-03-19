import './commands';

// Global error handler — prevents Cypress from failing on uncaught app exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Investing.com throws many third-party script errors; ignore them
  return false;
});
