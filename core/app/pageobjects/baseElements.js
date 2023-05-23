const logger = require("../helpers/logger");
const ph = require("../pageHolder");

class BaseElements {
    constructor() {
        this._page = null;
    }
    updatePage() {
        if (this._page) {
            if (ph.page && ph.page !== this._page) {
                this._page = ph.page;
            }
        } else {
            if (ph.page) {
                this._page = ph.page;
            } else {
                logger.error("Error occurred:", error);
            }
        }
    }

    get page() {
        this.updatePage();
        return this._page;
    }
    async click(elementName) {
        try {
            const selector = this[elementName];
            await this.page.waitForSelector(selector, {
                waitFor: "visible",
                timeout: 10000,
            });

            return this.page.locator(selector).click();
        } catch (error) {
            logger.error("Error occurred:", error);
        }
    }

    async type(elementName, product) {
        try {
            const selector = this[elementName];
            await this.page.locator(selector).type(product);
        } catch (error) {
            logger.error("Error occurred:", error);
        }
    }

    async getText(elementName) {
        try {
            const selector = this[elementName];
            return await this.page.locator(selector).textContent();
        } catch (error) {
            logger.error("Error occurred:", error);
        }
    }

    // async getRole(elementName) {
    //   const selector = this[elementName];
    //   return await this.page.locator(selector).innerText();
    // }

    async navigate(url) {
        try {
            return await this.page.goto(url);
        } catch (error) {
            logger.error("Error occurred:", error);
        }
    }
}

module.exports = { BaseElements };
