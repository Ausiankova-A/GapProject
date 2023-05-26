const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const generateAllureReport = require('../app/helpers/generateAllure');

const testDir = './core/test';

const mocha = new Mocha({
    timeout: 50000,
    rootHooks: require('../test/hooks/globalHooks').mochaHooks,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
        targetDir: path.join(
            __dirname,
            '../app/helpers/reports/allure-results'
        ),
    },
});

switch (process.env.npm_config_suite) {
    case 'smoke':
        mocha.grep(/smoke/);
        break;
    case '_cart':
        mocha.grep(/_cart/);
        break;
}

(async function loadTests() {
    try {
        const files = fs.readdirSync(testDir);
        files
            .filter((file) => file.endsWith('.test.js'))
            .map((file) => path.join(testDir, file))
            .forEach((file) => {
                mocha.addFile(file);
            });
        mocha.run(async function (failures) {
            await generateAllureReport();
            process.exitCode = failures ? 1 : 0;
        });
    } catch (err) {
        console.log(err);
    }
})();
