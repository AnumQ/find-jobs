/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    // Example for production:
    //cy.visit("https://find-jobs-kappa.vercel.app/");
  });

  it("Reloads the page successfully", () => {
    cy.reload();

    // reload the page without using the cache
    cy.reload(true);
  });

  it("Navigates to the 'Jobs' page successfully", () => {
    cy.get('[data-cy="jobsLink"]').click();
    // Assuming 'Jobs' link navigates to the root ('/')
    cy.location("pathname").should("eq", "/");
  });

  it("Navigates to the 'About Us' page successfully", () => {
    cy.get('[data-cy="aboutUsLink"]').click();
    cy.location("pathname").should("eq", "/about");
  });

  it("Navigates to the 'Advice for Job Seekers' page successfully", () => {
    cy.get('[data-cy="adviceLink"]').click();
    // Assuming full path for "Advice for Job Seekers" page is provided here
    cy.location("pathname").should("eq", "/advice"); // Update this path according to your actual URL
  });

  it("Navigates to the 'Got any questions?' (FAQ) page successfully", () => {
    cy.get('[data-cy="faqLink"]').click();
    // Assuming full path for "FAQ" page is provided here
    cy.location("pathname").should("eq", "/faq"); // Update this path according to your actual URL
  });

  it("Navigates to the 'Tips to improve CV' page successfully", () => {
    cy.get('[data-cy="tipsLink"]').click();
    // Assuming full path for "Tips to improve CV" page is provided here
    cy.location("pathname").should("eq", "/tips"); // Update this path according to your actual URL
  });
});
