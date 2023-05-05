class PersonalAccount {
    constructor(page) {
        this.page = page;
        this.PersonalAccountButton = '.top-panel__userbar__user__name__inner';
        this.PersonalAccountHeader = '.l-row-user-name h1';
        this.ExitButton = '.l-col-3 .uc-nav.uc-nav-last li a';
        this.FavoritesArea = '.viewer-type-card__wrapper #goods-table';
        this.FavoritesTitle = '.item-type-card__title';
        this.FavoritesTab = '#user-tab-wishlist';
    }
  }
    
    module.exports = {PersonalAccount};