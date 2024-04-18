/// <reference types="cypress"/>

describe("wwww.investing.com",()=>{


  beforeEach(function() { 

    //Error Handler
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });

      //Add dinamic data from Fixture
      cy.fixture('example').then(function(regdata){
        this.regdata=regdata
     });
     

       })
    
    it("Login",()=>{
        cy.visit(Cypress.env('Investing'));
        //Get the Pop Up
        cy.get('#onetrust-accept-btn-handler')
          .should('have.text', "I Accept").click();
          //Click on Sign In button
            cy.contains('Sign In').click({force : true});

            cy.contains('Sign in with Email').click({force : true});

            cy.get('[name="email"]').type(Cypress.env('goodEmail'));
            cy.get('[name="password"]').type(Cypress.env('goodPass'));

            cy.contains('Sign In').click({force : true});

          
        cy.wait(10000);

        cy.get('.myAccount')
          .then(($logout) =>{cy.get('#myAccountHeaderPop > div > ul:nth-child(5) > li:nth-child(4) > a')
           .invoke('show')
             .click({force : true}) });

        });

    
//--------------------------------------------------------------------


//Bad login

    

        it("Login2",()=>{
            cy.visit("https://www.investing.com/");
            cy.get('#onetrust-accept-btn-handler').click();
            cy.get('.login').click();
            cy.get('#loginFormUser_email').type(Cypress.env('badEmail1'));
            cy.get('#loginForm_password').type(Cypress.env('badPass1'));
            cy.get('#signup > .newButton').click({force : true});
            cy.get('#emailSigningNotify').should('contain',"Please enter a valid email address");
        });
      
//-----------------------------------------------------------------


            //badlogin3

          

              it("Login3",()=>{
                  cy.visit("https://www.investing.com/");
                  cy.get('#onetrust-accept-btn-handler').click();
                  cy.get('.login').click();
                  cy.get('#loginFormUser_email').type(Cypress.env('badEmail2'));
                  cy.get('#loginForm_password').type(Cypress.env('badPass1'));
                  cy.get('#signup > .newButton').click({force : true});
                  cy.get('#serverErrors').should('contain','Wrong email or password. Try again.')
                 
          
            });
    
          
          

        });
    