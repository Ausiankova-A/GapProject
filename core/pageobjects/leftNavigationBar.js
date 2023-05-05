class LeftNavBar {
    constructor(page) {
        this.page = page;
        this.NavigationLinks = '.menu-link-action.main-nav__list__item';
        this.BooksSection = '.main-nav__list__li_wnav:nth-child(3)';
    }
  }
    
    module.exports = {LeftNavBar};