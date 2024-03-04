describe("User Registration", () => {
  it("New user registration", () => {
    cy.visit('/')
    
    cy.get('.header-button--registration > span').click()
    //cy.get('#user_password').type('******');
    //cy.get('h1').should('contain', 'jane.lane')
  });
});
