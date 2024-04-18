const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser: "chrome",
    experimentalOriginDependencies: true,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      "reportDir": "cypress/reports",
     " reportPageTitle": 'Inv-QA',
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
    "reportFilename": "Inv  QA Report"
    },
    pageLoadTimeout:200000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    Investing: 'www.investing.com',
    goodEmail: "don_castell@yahoo.com",
  goodPass: "invest1234",
  badEmail1: "dori@mirama.com",
  badPass1: "reggie",
  badEmail2: "marcc@hotmi.co",
  badPass2: "mrcooo"
  }
});
