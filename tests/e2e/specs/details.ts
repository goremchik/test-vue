describe('Details', () => {
  it('should render 10 suggested movies', () => {
    cy.visit('/details/447365');
    cy.get('.movies__item').should('have.length', 10);
    cy.get('.movies__highlight').should('be', '10');
  });

  it('should render movie details', () => {
    cy.visit('/details/447365');
    cy.get('.movie-details__title')
      .first()
      .should('be', 'Guardians of the Galaxy Vol. 3');
    cy.get('.movie-details__rating').first().should('be', '0');
    cy.get('.movie-details__genre')
      .first()
      .should('be', 'Action, Adventure, Science Fiction');
    cy.get('.movie-details__date').first().should('be', '2020');
    cy.get('.movie-details__duration').first().should('be', '0 min');
  });
});
