/// <reference types="cypress" />

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

    // cy.contains("مدیریت کاربران").click();
  });
  // cy.reload();
});
// });
// });

// Cypress.Commands.add("getLoggedInSession", () => {
//   cy.log("Hello there");
// });
// start

// describe("Playwright Login with Cypress Integration", () => {
it("The test can be simplified with a Cypress.command", () => {
  // cy.visit("http://dev.cms.test/");
  // cy.get(".login-btn").contains("ورود با نام کاربری").click();
  // cy.log(
  //   "Creating Playwright session and pulling cookies to apply to Cypress."
  // );

  cy.getLoggedInSession();
  // cy.contains('YOUR_BUTTON_CLASS', 'Customer');

  // cy.reload();
});
// });
