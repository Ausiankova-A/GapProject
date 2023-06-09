const { Search } = require('./pageComponents/search');
const { ItemPage } = require('./itemPage');
const { Cart } = require('./pageComponents/cart');
const { LoginPage } = require('./pageComponents/login');
const {
    PersonalAccount,
} = require('./pageComponents/personalAccount');
const { MainPage } = require('./mainPage');
const { LeftNavBar } = require('./leftNavigationBar');

class PageFactory {
    constructor() {
        this.searchInstance = null;
        this.itemPageInstance = null;
        this.cartInstance = null;
        this.loginPageInstance = null;
        this.personalAccountInstance = null;
        this.mainPageInstance = null;
        this.leftNavBarInstance = null;
    }
    get search() {
        if (!this.searchInstance) {
            this.searchInstance = new Search();
        }
        return this.searchInstance;
    }

    get itemPage() {
        if (!this.itemPageInstance) {
            this.itemPageInstance = new ItemPage();
        }
        return this.itemPageInstance;
    }

    get cart() {
        if (!this.cartInstance) {
            this.cartInstance = new Cart();
        }
        return this.cartInstance;
    }

    get loginPage() {
        if (!this.loginPageInstance) {
            this.loginPageInstance = new LoginPage();
        }
        return this.loginPageInstance;
    }

    get personalAccount() {
        if (!this.personalAccountInstance) {
            this.personalAccountInstance = new PersonalAccount();
        }
        return this.personalAccountInstance;
    }

    get mainPage() {
        if (!this.mainPageInstance) {
            this.mainPageInstance = new MainPage();
        }
        return this.mainPageInstance;
    }

    get leftNavBar() {
        if (!this.leftNavBarInstance) {
            this.leftNavBarInstance = new LeftNavBar();
        }
        return this.leftNavBarInstance;
    }
}

module.exports = {
    PageFactory,
};
