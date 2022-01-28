describe('Home', () => {
  it('should render 10 movies', () => {
    cy.visit('/');
    cy.get('.movies__item').should('have.length', 10);
    cy.get('.movies__highlight').should('be', '10');
  });

  it('should search for film', () => {
    cy.visit('/');
    cy.get('.search .input__field').type('Transformers 7');
    cy.wait(200);
    cy.get('.search .button').click();
    cy.get('.movies__item').should('have.length', 1);
  });

  it('should redirect to details', () => {
    cy.visit('/');
    cy.get('.movie-card__link').first().click();
    cy.wait(200);
    cy.location('pathname').should('eq', '/details/447365');
  });
});
