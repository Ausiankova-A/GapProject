const allure = require('allure-commandline');
const path = require('path');

function generateAllureReport() {
    const resultsPath = path.join(__dirname, './reports/allure-results');
    const reportPath = path.join(__dirname, './reports/allure-report');
    allure(['generate', resultsPath, '-o', reportPath, '--clean']);
    console.log('Allure report has been generated');
}
module.exports = generateAllureReport;
