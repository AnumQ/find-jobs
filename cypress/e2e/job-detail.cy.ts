/// <reference types="cypress" />

describe("Job Detail Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    // Click the first job link to navigate to the Job Detail page
    cy.get('[data-cy^="job-link"]').first().click();
    // Wait for navigation and subsequent page load
    cy.url().should("include", "/job/");
  });

  it("displays the job detail information correctly", () => {
    // Check if the employer name is visible
    cy.get('[data-cy="employer-name"]').should("be.visible");

    // Check if the source link is visible and check for existence of 'href' attribute
    cy.get('[data-cy="source-link"]')
      .should("be.visible")
      .and("have.attr", "href");

    // Check if the job description is visible
    cy.get('[data-cy="job-description"]').should("be.visible");

    // Check if the apply link is visible and contains 'href' attribute (ensures it's functional)
    cy.get('[data-cy="apply-link"]')
      .should("be.visible")
      .and("have.attr", "href")
      .and("not.be.empty");
  });
});
