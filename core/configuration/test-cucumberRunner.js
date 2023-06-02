const {
    loadConfiguration,
    loadSupport,
    runCucumber,
} = require('@cucumber/cucumber/api');


(async function runTests() {
    const configFile = './core/configuration/cucumber.js';
    const { runConfiguration } = await loadConfiguration({
        file: configFile,
    });
    const support = await loadSupport(runConfiguration);
    const { success } = await runCucumber({ ...runConfiguration, support });
    return success;
})();
