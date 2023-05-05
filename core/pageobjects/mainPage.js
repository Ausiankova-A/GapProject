class MainPage {
    constructor(page) {
        this.page = page;
        this.SliderLinks = '.offers-slider__pagination__item span';
        this.CategoryGoods = '.b-mpgs-header h2 a';
        this.TopPanelItems = '.top-panel__hnav__li.top-panel__hnav__li_r a';
        this.StationeryMainMenu = '#staticmenu_body_business li a';
        this.BooksMainMenu = '#staticmenu_body_books li a';
        this.UpButton = '.up-btn.up-btn_visible';
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