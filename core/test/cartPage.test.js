const { chromium } = require("playwright");
const { expect } = require("chai");
const { Search } = require("../pageobjects/pageComponents/search");
const { ItemPage } = require("../pageobjects/itemPage");
const { Cart } = require("../pageobjects/pageComponents/cart");
const { LoginPage } = require("../pageobjects/pageComponents/login");
const { PersonalAccount } = require("../pageobjects/pageComponents/personalAccount");

const search = new Search();
const itemPage = new ItemPage();
const cart = new Cart();
const loginPage = new LoginPage();
const personalAccount = new PersonalAccount();

describe('Testing Cart for "Oz" website', () => {
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

    it("As a user, I can add product to the cart", async () => {
      await page.goto("https://oz.by/");
      await page.locator(search.SearchField).type("Гарри Поттер и философский камень");
      await page.locator(search.SearchButton).click();
      // await page.waitForTimeout(2000);
      await page.locator(search.FirstSearchResult).click();
      await page.locator(itemPage.AddToCartButton).click();
      await page.locator(cart.CartButton).click();
      await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
      const ItemTitle = await page.locator(cart.ItemTitle).textContent();
      expect(ItemTitle).to.equal("Гарри Поттер и философский камень");
    });

//   it("As a user, I can delete all products from the cart", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Цветы для Элджернона");
//     await search.addToCart(page, "Календарь");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.CheckAllCheckbox).click();
//     await page.locator(cart.DeleteItemButton).click();
//     await page.locator(cart.DeletionConfirmationButton).click();
//     const EmptyCartTitle = await page.locator(cart.EmptyCartTitle).textContent();
//     const formattedTitle = EmptyCartTitle.trim().replaceAll(/\s/g, " ");
//     expect(formattedTitle).to.equal("В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:");
//   });

//   it("As a user, I get correct error message when I want to checkout without Name and Surname", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Эмили бронте");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.CheckoutButton).click();
//     const NameSurnameErrorMessage = await page.locator(cart.NameSurnameErrorMessage).textContent();
//     expect(NameSurnameErrorMessage).to.equal("Необходимо ввести фамилию, имя, отчество");
//   });

//   it("As a user, I get correct error message when I want to checkout without filling all required fields", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Атлант расправил плечи");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.CheckoutButton).click();
//     const CheckoutErrorMessage = await page.locator(cart.CheckoutErrorMessage).textContent();
//     expect(CheckoutErrorMessage).to.equal("Данный способ оплаты недоступен");
//   });

// it("As a user, I can add my Name and Surname for delivery", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "бядуля");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.NameField).type('Овсенкова Анастасия Николаевна ');
//     const NameFieldData = await page.locator(cart.NameFieldData).textContent();
//     expect(NameFieldData).to.equal("Овсенкова Анастасия Николаевна");
//   });

// it("As a user, I can add items to my favorites", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Человек-бензопила");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.CartButton).click();
//     await page.locator(cart.FirstItemInCart).click();
//     await cart.moveToFavorites(page);
//     await page.locator(personalAccount.PersonalAccountButton).click();
//     await page.locator(personalAccount.FavoritesTab).click();
//     const FavoritesTitle = await page.locator(personalAccount.FavoritesTitle).textContent();
//     expect(FavoritesTitle).to.contain("Человек-бензопила");
//   });

// it("As a user, Can I add a shipping address", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Джейн Эйр");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.DeliveryAddressButton).click();
//     await page.locator(cart.AddAddress).click();
//     await page.locator(cart.DeliveryStreet).type('Плеханова');
//     await page.locator(cart.DeliveryHouse).type('101');
//     await page.locator(cart.DeliveryFlat).type('38');
//     await page.locator(cart.DeliveryEntrance).type('3');
//     await page.locator(cart.DeliveryFloor).type('3');
//     await page.locator(cart.DeliveryFloor).type('3');
//     await page.locator(cart.AddAddressButton).click();
//     const DeliveryAddressField = await page.locator(cart.DeliveryAddressField).textContent();
//     expect(DeliveryAddressField.trim()).to.equal("ул. Плеханова, дом 101, кв. 38, подъезд 3, этаж 3, г. Минск, Минский район");
//   });

// it("As a user, I can add a payment method", async () => {
//     await page.goto("https://oz.by/");
//     await search.addToCart(page, "Гарри Поттер и философский камень");
//     await page.locator(cart.CartButton).click();
//     await loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
//     await page.locator(cart.PaymentMethodField).click();
//     await page.locator(cart.PaymentByInstallmentCard).click();
//     const PaymentMethodFieldData = await page.locator(cart.PaymentMethodFieldData).textContent();
//     expect(PaymentMethodFieldData).to.equal("Оплата картой рассрочки Халва");
//   });
});
