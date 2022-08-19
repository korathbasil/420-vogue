/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("shows login page", () => {
    cy.contains("420VOGUE.");
    cy.contains("Please login to continue.");
  });

  it("has 2 input fields and a login button", () => {
    cy.get("input").should("have.length", 2);
    cy.get("button").should("have.length", 1);
  });
});
