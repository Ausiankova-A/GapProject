class BaseElements {
    constructor() {
    }
    async click(page,elementName) {
        const selector = this[elementName];
        await page.waitForSelector(selector,{
            waitFor:"visible",
            timeout:10000
        });
        return page.locator(selector).click();
    };
    async type(page, elementName, product) {       
        const selector = this[elementName];
        await page.locator(selector).type(product);
    };
    async getText(page, elementName) {
       const selector = this[elementName];
       return await page.locator(selector).textContent();
    };
    async navigate(page,url) {
        return page.goto(url)
    };
}

module.exports = { BaseElements };