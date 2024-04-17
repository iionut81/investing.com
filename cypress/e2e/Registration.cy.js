/// <reference types="Cypress"/>
describe("wwww.investing.com",()=>{
var regdata = require("../../Regdata.json");


    //1.Valid Registration

regdata.badreg1.forEach((temp) => {

    it("registration",()=>{
        cy.visit("https://www.investing.com/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.register').click().
                    then(($signup) => {cy.get('#signup > #signUPBtn').click()});
        cy.get('#user_firstnameRemark').type(temp.firstname);
       cy.get('#in_user_lastname').type(temp.lastname);
        cy.get('#in_user_email').type(temp.email);
       cy.get('#in_password').type(temp.pass);
       cy.get('#signup > #signUPBtn').click({force : true});   
       cy.wait(7000);
       cy.get('.allow-notifications-popup-close-button').click(); 

       
      //  cy.get('#emailCode').type('jiberis');  
      //  cy.get('.js-confSent > .newButton').click().
      //                then(($reg) => {cy.get('.allow-notifications-popup-close-button').click()});    
      //   cy.get('.searchText').
      //                then(($search) => {cy.get('.right > .popupCloseIcon').invoke('show').click({force : true})})
        
            });

          });

//------------------------------------------



//---------
    
});