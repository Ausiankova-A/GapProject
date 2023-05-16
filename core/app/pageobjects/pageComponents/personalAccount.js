const { BaseElements } = require("../baseElements");

class PersonalAccount extends BaseElements {
  constructor(page) {
    super();
    this.page = page;
    this.personalAccountButton = ".top-panel__userbar__user__name__inner";
    this.personalAccountHeader = ".l-row-user-name h1";
    this.exitButton = ".l-col-3 .uc-nav.uc-nav-last li a";
    this.favoritesArea = ".viewer-type-card__wrapper #goods-table";
    this.favoritesTitle = ".item-type-card__title";
    this.favoritesTab = "#user-tab-wishlist";
  }
}

module.exports = { PersonalAccount };
