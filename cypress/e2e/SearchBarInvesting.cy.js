/// <reference types="Cypress"/>
describe("wwww.investing.com",()=>{

    //1.Search bar visibility

    it("searchBarVisibility",()=>{
        cy.visit("https://www.investing.com/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.searchText').
          then(($search) => {cy.get('.right > .popupCloseIcon').invoke('show').click({force : true})})
       cy.get('.searchText').should('be.visible') ;    
            });


//2.Search button visibility

            it("searchBarbutton",()=>{
                cy.visit("https://www.investing.com/");
                cy.get('#onetrust-accept-btn-handler').click();
                cy.get('.searchGlassIcon').
               then(($search) => {cy.get('.right > .popupCloseIcon').invoke('show').click({force : true})})
                     cy.get('.searchGlassIcon').should('be.visible') ;    
                    });



//3.Search Function/Results

          it.only("searchFunction",()=>{
                cy.visit("https://www.investing.com/");
                cy.get('#onetrust-accept-btn-handler').click();
                cy.get('.searchText').
                  then(($search) => {cy.get('.right > .popupCloseIcon').invoke('show').click({force : true})})
                       cy.get('.searchText').type('nio') ; 
                       cy.get('.searchGlassIcon').click();    
                       cy.get('.js-inner-all-results-quotes-wrapper > [href="/equities/nio-inc"] > .second').click();
                            });
                

    




                           
    
});