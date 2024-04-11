/// <reference types="cypress" />

describe("Job List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.intercept("GET", "/api/jobs*").as("fetchJobs");
  });

  it("should display at least 2 rows", () => {
    cy.get('[data-cy="job-list"] tr').should("have.length.at.least", 2);
  });

  it("should reload data when toggling live data mode", () => {
    // Ensure the page is initially not in live mode
    cy.get('[data-cy="live-mode-switch"]').should("not.be.checked");

    // Intercept the API call to ensure it's triggered when live mode is toggled
    cy.intercept("GET", "**/*").as("jobsRequest");

    // Click the switch to turn on live mode
    cy.get('[data-cy="live-mode-switch"]').click();

    cy.wait("@jobsRequest").then((interception) => {
      if (interception.response) {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.data).to.exist;
      } else {
        throw new Error("No response received");
      }
    });

    // Assuming there will always be at least 1 result in the search
    cy.get('[data-cy="job-list"] tr').should("have.length.at.least", 1);
  });
});
