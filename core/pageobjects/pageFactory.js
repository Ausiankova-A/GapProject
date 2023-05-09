const { Search } = require("./pageComponents/search");
const { ItemPage } = require("../pageobjects/itemPage");
const { Cart } = require("../pageobjects/pageComponents/cart");
const { LoginPage } = require("../pageobjects/pageComponents/login");
const { PersonalAccount } = require("../pageobjects/pageComponents/personalAccount");
const { MainPage } = require("../pageobjects/mainPage");


class PageFactory {
    search = new Search();
    itemPage = new ItemPage();
    cart = new Cart();
    loginPage = new LoginPage();
    personalAccount = new PersonalAccount();
    mainPage = new MainPage();
  }
  
  module.exports = {
    PageFactory,
  };