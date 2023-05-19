const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");

const testDir = "./core/test";

const mocha = new Mocha({
    timeout: 50000,
    rootHooks: require("../test/globalHooks").mochaHooks,
});

switch (process.env.npm_config_suite) {
    case "smoke":
        mocha.grep(/smoke/);
        break;
    case "bla":
        mocha.grep(/bla/);
        break;
}

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
