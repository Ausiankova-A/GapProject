const ph = require('../../app/ui/pageHolder');

exports.mochaHooks = {
    async beforeAll() {
        await ph.initBrowser();
    },
    async beforeEach() {
        await ph.openPage();
    },
    async afterEach() {
        await ph.closePage();
    },
    async afterAll() {
        await ph.closeBrowser();
    },
};
