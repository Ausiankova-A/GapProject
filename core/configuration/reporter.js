const { AllureRuntime } = require('allure-js-commons');
const { CucumberJSAllureFormatter } = require('allure-cucumberjs');
const path = require('path');

class MyCucumberJSAllureFormatter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: path.join(__dirname, '../app/ui/helpers/reportsCucumber/allure-results') }), {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: "epic",
        },
        {
          pattern: [/@severity:(.*)/],
          name: "severity",
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: "issue",
          urlTemplate: "http://localhost:8080/issue/%s",
        },
        {
          pattern: [/@tms=(.*)/],
          type: "tms",
          urlTemplate: "http://localhost:8080/tms/%s",
        },
      ],
    });
  }
}

module.exports = MyCucumberJSAllureFormatter;