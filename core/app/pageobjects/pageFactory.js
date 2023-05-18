const { Search } = require("./pageComponents/search");
const { ItemPage } = require("../pageobjects/itemPage");
const { Cart } = require("../pageobjects/pageComponents/cart");
const { LoginPage } = require("../pageobjects/pageComponents/login");
const {
  PersonalAccount,
} = require("../pageobjects/pageComponents/personalAccount");
const { MainPage } = require("../pageobjects/mainPage");
const { LeftNavBar } = require("../pageobjects/leftNavigationBar");
// const { BaseElements } = require("./baseElements.js");


class PageFactory  {
  constructor() {
    this.search = new Search();
    this.itemPage = new ItemPage();
    this.cart = new Cart();
    this.loginPage = new LoginPage();
    this.personalAccount = new PersonalAccount();
    this.mainPage = new MainPage();
    this.leftNavBar = new LeftNavBar();
    // this.baseElements = new BaseElements();
  }
}

module.exports = {
  PageFactory,
};
