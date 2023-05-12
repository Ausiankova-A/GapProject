const { BaseElements } = require("../baseElements");
const { ItemPage } = require("../itemPage");
const itemPage = new ItemPage();

class Search extends BaseElements {
  constructor() {
      super();
      this.searchField = '#top-s';
      this.firstSearchResult = '.viewer-type-card_has-filter.viewer-type-card li:first-child';
      this.productName = '//*[@class="b-product-title__heading"]/h1';
      this.searchButton = '.top-panel__search__btn__item';
      this.invalidSearchResult = '.breadcrumbs__list__li.active';
  }
  async addToCart(page, product) {
      await page.locator(this.searchField).type(product);
      await page.locator(this.searchButton).click();
      await page.locator(this.firstSearchResult).click();
      await page.locator(itemPage.addToCartButton).click();
  }
  
}
  
  module.exports = {Search};

 