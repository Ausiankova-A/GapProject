class MainPage {
    constructor() {
        this.sliderLinks = '.offers-slider__pagination__item span';
        this.categoryGoods = '.b-mpgs-header h2 a';
        this.topPanelItems = '.top-panel__hnav__li.top-panel__hnav__li_r a';
        this.stationeryMainMenu = '#staticmenu_body_business li a';
        this.booksMainMenu = '#staticmenu_body_books li a';
        this.upButton = '.up-btn.up-btn_visible';
    }
    async click(page,selector) {
        await page.waitForSelector(selector,{
            waitFor:"visible",
            timeout:10000
        });
        return page.locator(selector).click();
    };
    async type(page, selector, product) {
        await page.locator(selector).type(product);
    };
    async getText(page, selector) {
       return await page.locator(selector).textContent();
    };
    async navigate(page,url) {
        return page.goto(url)
    };
}

module.exports = { MainPage };