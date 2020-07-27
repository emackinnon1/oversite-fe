describe('Integration story for the whole app', () => {

	describe('Search by State User story', () => {
		
			it('As a user I should be able to visit the home page and see search box with search params ', () => {
				cy.visit('http://localhost:3000/')
				cy.contains('Name')
				cy.contains('Search')
				cy.contains('Home')

			});

			it('As a user i should be able to pick a state and see reps for the choosen state', () => {
				cy.visit('http://localhost:3000/')
				cy.get('.search-params').select('state')
				cy.get('.state-picker-container select').select('Colorado')
				cy.get('.search-btn').click()
				// verify that the url changed to /results.
				cy.url()
					.should('include', '/results')
				cy.contains('Senate')
				cy.contains('Cory Gardner')
				cy.contains('House of Representatives')
				cy.contains('Doug Lamborn')
				// clicking on the home button returns back to main search page
				cy.get('.nav-links-container a')
					.contains('Home')
				.click()
		});

	})




})