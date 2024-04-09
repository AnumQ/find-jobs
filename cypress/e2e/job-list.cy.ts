/// <reference types="cypress" />

describe("Job List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display at least 2 rows", () => {
    cy.get('[data-cy="job-list"] tr').should("have.length.at.least", 2);
  });
});
