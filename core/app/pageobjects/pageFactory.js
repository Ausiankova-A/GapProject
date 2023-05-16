const { Search } = require("./pageComponents/search");
const { ItemPage } = require("../pageobjects/itemPage");
const { Cart } = require("../pageobjects/pageComponents/cart");
const { LoginPage } = require("../pageobjects/pageComponents/login");
const {PersonalAccount} = require("../pageobjects/pageComponents/personalAccount");
const { MainPage } = require("../pageobjects/mainPage");
const { LeftNavBar } = require("../pageobjects/leftNavigationBar");


class PageFactory {
  constructor(page) {
    this.search = new Search(page);
    this.itemPage = new ItemPage(page);
    this.cart = new Cart(page);
    this.loginPage = new LoginPage(page);
    this.personalAccount = new PersonalAccount(page);
    this.mainPage = new MainPage(page);
    this.leftNavBar = new LeftNavBar(page);
  }
}

module.exports = {
  PageFactory,
};
