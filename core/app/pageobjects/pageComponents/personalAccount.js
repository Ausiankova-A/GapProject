const { BaseElements } = require("../baseElements.js");

class PersonalAccount extends BaseElements {
    constructor() {
        super();
        this.personalAccountButton = ".top-panel__userbar__user__name__inner";
        this.personalAccountHeader = ".l-row-user-name h1";
        this.exitButton = ".l-col-3 .uc-nav.uc-nav-last li a";
        this.favoritesArea = ".viewer-type-card__wrapper #goods-table";
        this.favoritesTitle = ".item-type-card__title";
        this.favoritesTab = "#user-tab-wishlist";
    }
}

module.exports = { PersonalAccount };
