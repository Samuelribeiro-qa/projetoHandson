const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.eadhandsoncode.com.br/campus/'
  },
  viewportHeight: 720,
  viewportWidth:1280,
});
