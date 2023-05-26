const { loadConfiguration, runCucumber } = require('@cucumber/cucumber/api');
const path = require('path');

(async function runTests() {
  const featurePaths = [path.join(__dirname, '../test/features/*.feature')];
  const stepPaths = [path.join(__dirname, '../step-definitions/*.js')];
  const { runConfiguration } = await loadConfiguration({ 
      featurePaths,
      runtimeOptions: {
          require: stepPaths 
      }
  });
  console.log(runConfiguration);
  const { success } = await runCucumber(runConfiguration);
  return success;
})();
