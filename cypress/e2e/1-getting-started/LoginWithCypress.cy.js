/// <reference types="cypress" />

Cypress.Commands.add("getLoggedInSession", () => {
  return cy.task("getLoggedInSession").then((cookies) => {
    cy.log("Setting cookies from Playwright session", JSON.stringify(cookies));

    cookies.forEach((cookie) => {
      //   cy.log("name: ", cookie.name, " value: ", cookie.value);
      cy.setCookie(cookie.name, cookie.value, { log: false });
    });
  });
  // cy.reload();
});
it("The test can be simplified with a Cypress.command", () => {
  cy.visit("http://dev.cms.test/");
  cy.get(".login-btn").contains("ورود با نام کاربری").click();

  //   "Creating Playwright session and pulling cookies to apply to Cypress."
  cy.getLoggedInSession();
  cy.wait(2000);
  cy.visit("http://dev.cms.test/");
  cy.contains("مدیریت کاربران").click();
});
