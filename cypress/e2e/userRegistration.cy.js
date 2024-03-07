describe("User Registration", () => {
  beforeEach(() => {
    // Added failOnStatusCode:false because the site was returning 503 error
    cy.visit("/", { failOnStatusCode: false });
  });
  it("New user registration", () => {
    // Close modal
    cy.closeModal();

    // Start registration process
    cy.get(".header-button--registration > span").click();
    cy.url().should("contain", "user/registration");

    // Fill the form
    cy.get('[data-test="input-email"]').type(`${Date.now()}@mailinator.com`);
    cy.get(
      '[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]'
    ).click();
    cy.get(":nth-child(2) > .special-radio__label").click();
    cy.get('[data-test="input-password"]').type("Passw0rd*");
    cy.get('[data-test="input-password_confirmation"]').type("Passw0rd*");
    cy.get('[data-test="control-submit"]').click();

    // Verify if registration is complete
    cy.url().should("contain", "/registrationSuccess");
    cy.get(".notification__title").should("contain", "Congratulations!");
    cy.get(".notification__description").should(
      "contain",
      "Registration successfully finished"
    );
  });
});
