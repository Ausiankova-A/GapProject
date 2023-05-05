// const { chromium } = require('playwright');
// const { expect } = require('chai');
// const {LoginPage} = require('../pageobjects/pageComponents/login');
// const {Search} = require('../pageobjects/pageComponents/search');
// const {PersonalAccount} = require('../pageobjects/pageComponents/personalAccount');

// const loginPage = new LoginPage();
// const search = new Search();
// const personalAccount = new PersonalAccount();

// describe('Testing Login function for "Oz" website', () => {
//   let browser;
//   let page;

//   before(async () => {
//     browser = await chromium.launch({ headless: false });
//   });

//   after(async () => {
//     await browser.close();
//   });

//   beforeEach(async () => {
//     page = await browser.newPage();
//   });

//   afterEach(async () => {
//     await page.close();
//   });

//   it('As a user, I can not login with invalid email', async () => {
//     await page.goto('https://oz.by/');
//     await page.locator(loginPage.EnterPage).click();
//     await page.locator(loginPage.LoginFromEmail).click();
//     await page.locator(loginPage.EmailField).type('фыввыф');
//     await page.locator(loginPage.PasswordField).type('28Am5S');
//     await page.locator(loginPage.DisabledLoginButton).click();
//     const LoginErrorMessage = await page.locator(loginPage.LoginErrorMessage).textContent();
//     expect(LoginErrorMessage).to.contain('Введите корректный адрес электронной почты');
//   }); 

//   it('As a user, I can not login with invalid password', async () => {
//     await page.goto('https://oz.by/');
//     await page.locator(loginPage.EnterPage).click();
//     await page.locator(loginPage.LoginFromEmail).click();
//     await page.locator(loginPage.EmailField).type('nas_nas15@mail.ru');
//     await page.locator(loginPage.PasswordField).type('qweew');
//     await page.locator(loginPage.LoginButton).click();
//     const PasswordErrorMessage = await page.locator(loginPage.PasswordErrorMessage).textContent();
//     expect(PasswordErrorMessage).to.contain('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
//   }); 
  
//   it('As a user, I can logout from the application', async () => {
//     await page.goto('https://oz.by/');
//     await page.locator(search.SearchField).type('Цветы для Элджернона');
//     await page.locator(search.SearchButton).click();
//     await page.locator(loginPage.EnterPage).click();
//     await page.locator(loginPage.LoginFromEmail).click();
//     await page.locator(loginPage.EmailField).type('nas_nas15@mail.ru');
//     await page.locator(loginPage.PasswordField).type('28Am5S');
//     await page.locator(loginPage.LoginButton).click();
//     await page.locator(personalAccount.PersonalAccountButton).click();
//     await page.locator(personalAccount.ExitButton).click();
//     expect(loginPage.EnterPage).to.exist;
//   }); 
// });