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
        cy.visit("https://www.investing.com/");
        cy.get('#onetrust-accept-btn-handler')
          .should('have.text', "I Accept").click();
        cy.get('.list_list--horizontal__IzbiT list')
          .find('span')
            .contains('Sign In').click({force : true});
        cy.get("div[id='__next'] div[class='flex justify-center header_top-row-wrapper__7SAiJ xxl:px-[160px] xxxl:px-[300px]'] li:nth-child(1) button:nth-child(1)").trigger('mouseover').click();
        cy.get('#loginFormUser_email').type(this.regdata.goodEmail);
        cy.get('#loginForm_password').type(this.regdata.goodPass);
        cy.get('#signup > .newButton').click({force : true})
        //to see that the account is logged
        cy.wait(10000);

        cy.get('.myAccount').
        then(($logout) =>{cy.get('#myAccountHeaderPop > div > ul:nth-child(5) > li:nth-child(4) > a')
           .invoke('show')
             .click({force : true}) });

        });

    
//--------------------------------------------------------------------


//Bad login

    

        it("Login2",()=>{
            cy.visit("https://www.investing.com/");
            cy.get('#onetrust-accept-btn-handler').click();
            cy.get('.login').click();
            cy.get('#loginFormUser_email').type(this.regdata.badEmail1);
            cy.get('#loginForm_password').type(this.regdata.badPass1);
            cy.get('#signup > .newButton').click({force : true});
            cy.get('#emailSigningNotify').should('contain',"Please enter a valid email address");
        });
      
//-----------------------------------------------------------------


            //badlogin3

          

              it("Login3",()=>{
                  cy.visit("https://www.investing.com/");
                  cy.get('#onetrust-accept-btn-handler').click();
                  cy.get('.login').click();
                  cy.get('#loginFormUser_email').type(this.regdata.badEmail2);
                  cy.get('#loginForm_password').type(this.regdata.badPass2);
                  cy.get('#signup > .newButton').click({force : true});
                  cy.get('#serverErrors').should('contain','Wrong email or password. Try again.')
                 
          
            });
    
          
          

        });
    