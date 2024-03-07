describe("Login", () => {
  beforeEach(() => {
    // Added failOnStatusCode:false because the site was returning 503 error
    cy.visit("/", { failOnStatusCode: false });

    // Close modal
    cy.closeModal();
  });
  it("Login with valid credentials", () => {
    // Enter credentials
    cy.login("qa-automated-test@mailinator.com", "Passw0rd");

    // Check if user is logged
    cy.contains("[data-login-toggle]").should("not.exist");
  });
  it("Login with wrong credentials", () => {
    // Enter credentials
    cy.login("a", "a");

    // Check user is not logged in
    cy.url().should("contain", "user/login");
  });
});
