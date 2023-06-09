const path = require('path');
const allure = require('allure-commandline');

function generateAllureReport() {
    const allureResults = path.join(__dirname,'./reportsCucumber/allure-results');
    const allureReport = path.join(__dirname,'./reportsCucumber/allure-report');
    allure(['generate', allureResults, '-o', allureReport, '--clean']);

    console.log('Allure report has been generated');
}
module.exports = generateAllureReport;
