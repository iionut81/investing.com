import BasePage from './BasePage';

class SearchPage extends BasePage {
  // Selectors
  get searchInput() {
    return '.searchText';
  }

  get searchIcon() {
    return '.searchGlassIcon';
  }

  get searchResultsWrapper() {
    return '.js-inner-all-results-quotes-wrapper';
  }

  // Actions
  search(term) {
    cy.get(this.searchInput).should('be.visible').clear().type(term);
    cy.get(this.searchIcon).click();
  }

  clickResult(selector) {
    cy.get(this.searchResultsWrapper, { timeout: 10000 })
      .find(selector)
      .first()
      .click();
  }

  // Assertions
  verifySearchBarVisible() {
    cy.get(this.searchInput).should('be.visible');
  }

  verifySearchIconVisible() {
    cy.get(this.searchIcon).should('be.visible');
  }

  verifyResultsContain(text) {
    cy.get(this.searchResultsWrapper, { timeout: 10000 })
      .should('contain', text);
  }
}

export default new SearchPage();
