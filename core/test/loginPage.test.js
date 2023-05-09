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
    await pageFactory.mainPage.click(page,pageFactory.loginPage.enterPage);
    await pageFactory.mainPage.click(page,pageFactory.loginPage.loginFromEmail);
    await pageFactory.mainPage.type(page,pageFactory.loginPage.emailField,'фыввыф');
    await pageFactory.mainPage.type(page,pageFactory.loginPage.passwordField,'28Am5S');
    await pageFactory.mainPage.click(page,pageFactory.loginPage.disabledLoginButton);
    const LoginErrorMessage = await pageFactory.mainPage.getText(page,pageFactory.loginPage.loginErrorMessage);
    expect(LoginErrorMessage).to.contain('Введите корректный адрес электронной почты');
  }); 

  it('As a user, I can not login with invalid password', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.mainPage.click(page,pageFactory.loginPage.enterPage);
    await pageFactory.mainPage.click(page,pageFactory.loginPage.loginFromEmail);
    await pageFactory.mainPage.type(page,pageFactory.loginPage.emailField,'nas_nas15@mail.ru');
    await pageFactory.mainPage.type(page,pageFactory.loginPage.passwordField,'qweew');
    await pageFactory.mainPage.click(page,pageFactory.loginPage.loginButton);
    const PasswordErrorMessage = await pageFactory.mainPage.getText(page,pageFactory.loginPage.passwordErrorMessage);
    expect(PasswordErrorMessage).to.contain('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
  }); 
  
  it('As a user, I can logout from the application', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await page.locator(pageFactory.search.searchField).type('Цветы для Элджернона');
    await pageFactory.mainPage.click(page,pageFactory.search.searchButton);
    await pageFactory.mainPage.click(page,pageFactory.loginPage.enterPage);
    await pageFactory.mainPage.click(page,pageFactory.loginPage.loginFromEmail);
    await pageFactory.mainPage.type(page,pageFactory.loginPage.emailField,'nas_nas15@mail.ru');
    await pageFactory.mainPage.type(page,pageFactory.loginPage.passwordField,'28Am5S');
    await pageFactory.mainPage.click(page,pageFactory.loginPage.loginButton);
    await pageFactory.mainPage.click(page,pageFactory.personalAccount.personalAccountButton);
    await pageFactory.mainPage.click(page,pageFactory.personalAccount.exitButton);
    expect(pageFactory.loginPage.enterPage).to.exist;
  }); 
});