const { chromium } = require('playwright');

class PageHolder {
    constructor() {
        this._browser = null;
        this._page = null;
    }
    get page() {
        return this._page;
    }

    set page(page) {
        this._page = page;
    }
    async initBrowser() {
        this._browser = await chromium.launch({ headless: false });
        return this._browser;
    }
    async openPage() {
        this._page = await this._browser.newPage();
        return this._page;
    }
    async closeBrowser() {
        this._browser = await this._browser.close();
        return this._browser;
    }
    async closePage() {
        this._page = await this._page.close();
        return this._page;
    }
}

const ph = new PageHolder();
module.exports = ph;
