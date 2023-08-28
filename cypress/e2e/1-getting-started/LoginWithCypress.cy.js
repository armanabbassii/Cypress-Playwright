/// <reference types="cypress" />
// these commented lines of code are similar to the "Jordan" solution, but I had to make changes.

// it("Log into using Playwright and apply to Cypress", () => {
// cy.visit("http://dev.cms.test/");
// cy.get(".login-btn").contains("ورود با نام کاربری").click();

//   cy.log("Creating BBC session and pulling cookies to apply to Cypress.");
//   cy.task("getLoggedInSession", null, { log: false }).then((cookies) => {
//     cy.log("Setting cookies from Playwright session");
//     for (const cookie of cookies) {
//       cy.setCookie(cookie.name, cookie.value, { log: false });
//     }
//   });
//   cy.reload();
// });

Cypress.Commands.add("getLoggedInSession", () => {
  return cy.task("getLoggedInSession").then((cookies) => {
    cy.log("Setting cookies from Playwright session", cookies);

    cookies.forEach((cookie) => {
      //   cy.log("name: ", cookie.name, " value: ", cookie.value);
      cy.setCookie(cookie.name, cookie.value, { log: false });
    });
  });
  // cy.reload();
});
it("The test can be simplified with a Cypress.command", () => {
  // cy.visit("http://dev.cms.test/");
  // cy.get(".login-btn").contains("ورود با نام کاربری").click();

  //   "Creating Playwright session and pulling cookies to apply to Cypress."
  cy.getLoggedInSession();

  // cy.reload();
});
