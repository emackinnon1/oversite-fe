
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  

    it('As a user i should be able to visit the home page and see search box with search params ', () => {
        cy.visit('http://localhost:3001/')

        cy.contains('Name')
        cy.contains('Search')
        cy.contains('Home')

    });

    it('As a user I should be able to search for senator using their name', () => {
        cy.visit('http://localhost:3001/')
        cy.get('.search-input')
        .type('Bernard Sanders')
        .should('have.value','Bernard Sanders');
        cy.get('.search-btn')
        .click()
    });

})


