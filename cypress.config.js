const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    scrollBehavior: "center",
    baseUrl: "https://telnyx.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
