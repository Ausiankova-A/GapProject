class ItemPage {
    constructor(page) {
        this.page = page;
        this.ProductName = '//*[@class="b-product-title__heading"]/h1';
        this.AddToCartButton = '.first-button';
    }
  }
    
    module.exports = {ItemPage};