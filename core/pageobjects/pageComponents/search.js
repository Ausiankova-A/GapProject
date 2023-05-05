const { ItemPage } = require("../itemPage");
const itemPage = new ItemPage();

class Search {
  constructor() {
      this.SearchField = '#top-s';
      this.FirstSearchResult = '.viewer-type-card_has-filter.viewer-type-card li:first-child';
      this.ProductName = '//*[@class="b-product-title__heading"]/h1';
      this.SearchButton = '.top-panel__search__btn__item';
      this.InvalidSearchResult = '.breadcrumbs__list__li.active';
  }
  async addToCart(page, product) {
      await page.locator(this.SearchField).type(product);
      await page.locator(this.SearchButton).click();
      await page.locator(this.FirstSearchResult).click();
      await page.locator(itemPage.AddToCartButton).click();
  }
}
  
  module.exports = {Search};

 