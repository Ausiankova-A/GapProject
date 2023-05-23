const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");
// const  AllureReporter  = require('mocha-allure-reporter');

const testDir = "./core/test";


const mocha = new Mocha({
    timeout: 50000,
    rootHooks: require("../test/hooks/globalHooks").mochaHooks,
    reporter: 'mocha-allure-reporter',
    
});

switch (process.env.npm_config_suite) {
    case "smoke":
        mocha.grep(/smoke/);
        break;
    case "bla":
        mocha.grep(/bla/);
        break;
}

// const allureReporter = new AllureReporter();
// mocha.reporter(allureReporter);

(async function loadTests() {
    try {
        const files = fs.readdirSync(testDir);
        files
            .filter((file) => file.endsWith(".test.js"))
            .map((file) => path.join(testDir, file))
            .forEach((file) => {
                mocha.addFile(file);
            });
        mocha.run((failures) => (process.exitCode = failures ? 1 : 0));
    } catch (err) {
        console.log(err);
    }
})();

