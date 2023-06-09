const { BaseElements } = require('./baseElements.js');

class ItemPage extends BaseElements {
    constructor() {
        super();
        this.productName = '//*[@class="b-product-title__heading"]/h1';
        this.addToCartButton = '.first-button';
    }
}

module.exports = { ItemPage };
