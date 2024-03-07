describe("Game Category", () => {
  beforeEach(() => {
    // Added failOnStatusCode:false because the site was returning 503 error
    cy.visit("/gameGroup/popular", { failOnStatusCode: false });

    // Close modal
    cy.closeModal();
  });
  it("Search for a game demo of a specific category", () => {
    // Enter the word to search
    cy.get('.page-games__controls .search').click();
    cy.get('[placeholder="Search"]').type('cash');

    // Click on Demo button for the first result
    cy.get('[data-game-id="12172"] .button--t4').click()

    // Check it redirects to the game demo page
    cy.url().should("contain", "/game/demoGame/12172");
  });
});