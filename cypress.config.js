const { defineConfig } = require("cypress");
const playwrightCodes = require("./cypress/support/playwrightCodes");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", playwrightCodes);
      // implement node event listeners here
    },
  },
});
