describe('StudyNight Forms Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/index.html');
  });

  it('displays the Add New Set form when toggle button is clicked', () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Set');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form').should('be.visible');
    cy.get('form input').first().should('exist');
  });

  it('displays the Add New Card form when toggle button is clicked on flashcards page', () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('.cardSets').first().click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Card');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form').should('be.visible');
  });
});
