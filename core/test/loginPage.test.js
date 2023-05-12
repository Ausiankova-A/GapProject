const { chromium } = require('playwright');
const { expect } = require('chai');
const {PageFactory} = require('../pageobjects/pageFactory');

const pageFactory = new PageFactory();

describe('Testing Login function for "Oz" website', () => {
  let browser;
  let page;

  before(async () => {
    browser = await chromium.launch({ headless: false });
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('As a user, I can not login with invalid email', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.loginPage.click(page,'enterPage');
    await pageFactory.loginPage.click(page,'loginFromEmail');
    await pageFactory.loginPage.type(page,'emailField','фыввыф');
    await pageFactory.loginPage.type(page,'passwordField','28Am5S');
    await pageFactory.loginPage.click(page,'disabledLoginButton');
    const LoginErrorMessage = await pageFactory.loginPage.getText(page,'loginErrorMessage');
    expect(LoginErrorMessage).to.contain('Введите корректный адрес электронной почты');
  }); 

  it('As a user, I can not login with invalid password', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.loginPage.click(page,'enterPage');
    await pageFactory.loginPage.click(page,'loginFromEmail');
    await pageFactory.loginPage.type(page,'emailField','nas_nas15@mail.ru');
    await pageFactory.loginPage.type(page,'passwordField','qweew');
    await pageFactory.loginPage.click(page,'loginButton');
    const PasswordErrorMessage = await pageFactory.loginPage.getText(page,'passwordErrorMessage');
    expect(PasswordErrorMessage).to.contain('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
  }); 
  
  it('As a user, I can logout from the application', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.type(page, 'searchField', "Цветы для Элджернона");
    await pageFactory.search.click(page,'searchButton');
    await pageFactory.loginPage.click(page,'enterPage');
    await pageFactory.loginPage.click(page,'loginFromEmail');
    await pageFactory.loginPage.type(page,'emailField','nas_nas15@mail.ru');
    await pageFactory.loginPage.type(page,'passwordField','28Am5S');
    await pageFactory.loginPage.click(page,'loginButton');
    await pageFactory.personalAccount.click(page,'personalAccountButton');
    await pageFactory.personalAccount.click(page,'exitButton');
    expect(pageFactory.loginPage.enterPage).to.exist;
  }); 
});