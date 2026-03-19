/// <reference types="cypress" />
import SearchPage from '../../pages/SearchPage';

describe('Search Functionality', () => {
  beforeEach(() => {
    SearchPage.visit();
    SearchPage.acceptCookies();
    SearchPage.dismissPopup();
  });

  it('should display the search bar', () => {
    SearchPage.verifySearchBarVisible();
  });

  it('should display the search icon', () => {
    SearchPage.verifySearchIconVisible();
  });

  it('should return results for a valid stock search', () => {
    cy.fixture('search').then((data) => {
      SearchPage.search(data.validSearch.term);
      SearchPage.verifyResultsContain(data.validSearch.expectedResult);
      SearchPage.clickResult(data.validSearch.resultSelector);
      cy.url().should('include', '/equities/nio-inc');
    });
  });
});
