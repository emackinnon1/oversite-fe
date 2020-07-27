describe('Integration story for the whole app', () => {

	describe('Search by State User story', () => {
		
			it('As a user I should be able to visit the home page and see search box with search params ', () => {
				cy.visit('https://oversite-api.herokuapp.com/')
				cy.contains('Name')
				cy.contains('Search')
				cy.contains('Home')

			});

			it('As a user i should be able to pick a state and see reps for the choosen state', () => {
				cy.visit('https://oversite-api.herokuapp.com/')
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

	describe('Search by representative name User Story', ()=>{

		it('As a user I should be able to search for senator using their name', () => {
			cy.visit('https://oversite-api.herokuapp.com/')
			cy.get('.search-params').select('name')
			.should('have.value', 'name')
			cy.get('.search-input')
			.type('Bernard Sanders')
			.should('have.value','Bernard Sanders');
			// the endpoint does not exist yet.
		});


	})



})