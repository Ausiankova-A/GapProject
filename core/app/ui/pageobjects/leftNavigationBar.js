const { BaseElements } = require('./baseElements.js');

class LeftNavBar extends BaseElements {
    constructor() {
        super();
        this.navigationLinks = '.menu-link-action.main-nav__list__item';
        this.booksSection = '.main-nav__list__li_wnav:nth-child(3)';
    }
}

module.exports = { LeftNavBar };
