const { BaseElements } = require("./baseElements");

class MainPage extends BaseElements{
    constructor() {
        super();
        this.sliderLinks = '.offers-slider__pagination__item span';
        this.categoryGoods = '.b-mpgs-header h2 a';
        this.topPanelItems = '.top-panel__hnav__li.top-panel__hnav__li_r a';
        this.stationeryMainMenu = '#staticmenu_body_business li a';
        this.booksMainMenu = '#staticmenu_body_books li a';
        this.upButton = '.up-btn.up-btn_visible';
    }
}

module.exports = { MainPage };