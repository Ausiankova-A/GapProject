const allureReporter = require('cucumberjs-allure-reporter').default;
const path = require('path');
const allure = require('allure-commandline');

module.exports = {
    default: {
        paths: ['./core/test/features/*.feature'],
        require: [
            './core/test/hooks/globalHooksCucumber.js',
            './core/step-definitions/*.js',
            './core/configuration/parameterTypes.js',
        ],
        plugins: [allureReporter],
        strict: true,
        rerun: {
            maxAttempts: 2,
            path: './reports/rerun',
            pattern: 'rerun.txt',
            nonZeroExitCodeTests: ['./features/test.feature'],
        },

        format: [path.join(__dirname, "./reporter.js")],
        cucumberArgs: [
            `--world-parameters={"accountType":"current"}`,
            `--tags=${process.env.TEST_TAGS || ''}`,
        ],
    },
};


