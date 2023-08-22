const { defineConfig } = require("cypress");
const tasks = require("./cypress/support/task");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    baseUrl: "http://dev.cms.test/",
    setupNodeEvents(on, config) {
      on("task", tasks);
      // implement node event listeners here
    },
  },
});
