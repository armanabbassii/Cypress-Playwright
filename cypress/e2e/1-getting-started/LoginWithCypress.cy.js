/// <reference types="cypress" />
const { BASE_URL } = require("../../support/constants");

Cypress.Commands.add("captureAndSetCookies", () => {
  return cy.task("captureAndSetCookies").then((cookies) => {
    cy.log("Setting cookies from Playwright session", JSON.stringify(cookies));

    cookies.forEach((cookie) => {
      //   cy.log("name: ", cookie.name, " value: ", cookie.value);
      cy.setCookie(cookie.name, cookie.value, { log: false });
    });
  });
});
it("Login a user to the website via the SSO page", () => {
  cy.captureAndSetCookies();
  cy.wait(2000);
  cy.visit(BASE_URL);
});
