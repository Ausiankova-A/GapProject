// const { chromium } = require("playwright");
// const { expect } = require("chai");
// const { PageFactory } = require("../app/pageobjects/pageFactory");

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

//   it("As a user, I can not login with invalid email", async () => {
//     const pageFactory = new PageFactory(page);
//     await pageFactory.mainPage.navigate("https://oz.by/");
//     await pageFactory.loginPage.click("enterPage");
//     await pageFactory.loginPage.click("loginFromEmail");
//     await pageFactory.loginPage.type("emailField", "фыввыф");
//     await pageFactory.loginPage.type("passwordField", "28Am5S");
//     await pageFactory.loginPage.click("disabledLoginButton");
//     const LoginErrorMessage = await pageFactory.loginPage.getText(
//       "loginErrorMessage"
//     );
//     expect(LoginErrorMessage).to.contain(
//       "Введите корректный адрес электронной почты"
//     );
//   });

//   it("As a user, I can not login with invalid password", async () => {
//     const pageFactory = new PageFactory(page);
//     await pageFactory.mainPage.navigate("https://oz.by/");
//     await pageFactory.loginPage.click("enterPage");
//     await pageFactory.loginPage.click("loginFromEmail");
//     await pageFactory.loginPage.type("emailField", "nas_nas15@mail.ru");
//     await pageFactory.loginPage.type("passwordField", "qweew");
//     await pageFactory.loginPage.click("loginButton");
//     const PasswordErrorMessage = await pageFactory.loginPage.getText(
//       "passwordErrorMessage"
//     );
//     expect(PasswordErrorMessage).to.contain(
//       "Неверный пароль. Если вы потеряли или забыли пароль — восстановите его"
//     );
//   });

//   it("As a user, I can logout from the application", async () => {
//     const pageFactory = new PageFactory(page);
//     await pageFactory.mainPage.navigate("https://oz.by/");
//     await pageFactory.search.type("searchField", "Цветы для Элджернона");
//     await pageFactory.search.click("searchButton");
//     await pageFactory.loginPage.click("enterPage");
//     await pageFactory.loginPage.click("loginFromEmail");
//     await pageFactory.loginPage.type("emailField", "nas_nas15@mail.ru");
//     await pageFactory.loginPage.type("passwordField", "28Am5S");
//     await pageFactory.loginPage.click("loginButton");
//     await pageFactory.personalAccount.click("personalAccountButton");
//     await pageFactory.personalAccount.click("exitButton");
//     expect(pageFactory.loginPage.enterPage).to.exist;
//   });
// });
