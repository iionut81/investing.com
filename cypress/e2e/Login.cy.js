/// <reference types="cypress"/>
describe("wwww.investing.com",()=>{

    //1.Valid LOGIN
    var login = require('../../UI/Logindata.json');

login.goodlogin.forEach((temp) => {

    it("Login",()=>{
        cy.visit("https://www.investing.com/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.login').click();
        cy.get('#loginFormUser_email').type(temp.email);
        cy.get('#loginForm_password').type(temp.pass);
        cy.get('#signup > .newButton').click({force : true});

        //to see that the account is logged
        cy.wait(10000);

        cy.get('.myAccount').
        then(($logout) =>{cy.get('#myAccountHeaderPop > div > ul:nth-child(5) > li:nth-child(4) > a')
           .invoke('show')
             .click({force : true}) });

        });

      });
//--------------------------------------------------------------------


//Bad login

      login.badlogin1.forEach((temp) => {

        it("Login2",()=>{
            cy.visit("https://www.investing.com/");
            cy.get('#onetrust-accept-btn-handler').click();
            cy.get('.login').click();
            cy.get('#loginFormUser_email').type(temp.email);
            cy.get('#loginForm_password').type(temp.pass);
            cy.get('#signup > .newButton').click({force : true});
            cy.get('#emailSigningNotify').should('contain',"Please enter a valid email address");
        });
      });
//-----------------------------------------------------------------


            //badlogin3

            login.badlogin2.forEach((temp) => {

              it("Login3",()=>{
                  cy.visit("https://www.investing.com/");
                  cy.get('#onetrust-accept-btn-handler').click();
                  cy.get('.login').click();
                  cy.get('#loginFormUser_email').type(temp.email);
                  cy.get('#loginForm_password').type(temp.pass);
                  cy.get('#signup > .newButton').click({force : true});
                  cy.get('#serverErrors').should('contain','Wrong email or password. Try again.')
                 
          
            });
    
          
          });

        });
    