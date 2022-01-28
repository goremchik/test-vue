describe('Page not found', () => {
  it('should show page not found msg', () => {
    cy.visit('/no-such-page');
    cy.get('.not-found__title').first().should('be', 'Page not found');
  });
});
