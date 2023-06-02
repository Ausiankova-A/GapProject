const {
    BeforeAll,
    AfterAll,
    Before,
    After,
} = require('@cucumber/cucumber');
const ph = require('../../app/pageHolder');
const generateAllureReport = require('../../app/helpers/generateAllurecucumber');

BeforeAll(async () => {
    await ph.initBrowser();
});

Before(async () => {
   await ph.openPage();

});

After(async () => {
    await ph.closePage();
});

AfterAll(async () => {
    
    await ph.closeBrowser();
    await generateAllureReport();
});
