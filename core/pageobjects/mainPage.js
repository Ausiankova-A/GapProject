class MainPage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        return this.page.goto(url)
    }

    async click(selector) {
        await this.page.waitForSelector(selector,{
            waitFor:"visible",
            timeout:10000
});
        return this.page.locator(selector).click();
    }
}

module.exports = { MainPage };