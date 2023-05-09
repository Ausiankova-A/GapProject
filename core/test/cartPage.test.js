const { chromium } = require("playwright");
const { expect } = require("chai");
const {PageFactory} = require('../pageobjects/pageFactory');

const pageFactory = new PageFactory();


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
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.mainPage.type(page,pageFactory.search.searchField, "Гарри Поттер и философский камень");
    await pageFactory.mainPage.click(page,pageFactory.search.searchButton);
    await pageFactory.mainPage.click(page,pageFactory.search.firstSearchResult);
    await pageFactory.mainPage.click(page,pageFactory.itemPage.addToCartButton);
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    const ItemTitle = await pageFactory.mainPage.getText(page,pageFactory.cart.itemTitle);
    expect(ItemTitle).to.contain("Гарри Поттер и философский камень");
  });

  it("As a user, I can delete all products from the cart", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Цветы для Элджернона");
    await pageFactory.search.addToCart(page, "Календарь");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton); 
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page,pageFactory.cart.checkAllCheckbox);
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.mainPage.click(page,pageFactory.cart.checkAllCheckbox);
    await pageFactory.mainPage.click(page,pageFactory.cart.deleteItemButton);
    await pageFactory.mainPage.click(page,pageFactory.cart.deletionConfirmationButton);
    const EmptyCartTitle = await pageFactory.mainPage.getText(page,pageFactory.cart.emptyCartTitle);
    const formattedTitle = EmptyCartTitle.trim().replaceAll(/\s/g, " ");
    expect(formattedTitle).to.equal("В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:");
  });

  it("As a user, I get correct error message when I want to checkout without Name and Surname", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Эмили бронте");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page,pageFactory.cart.checkoutButton);
    const NameSurnameErrorMessage = await pageFactory.mainPage.getText(page,pageFactory.cart.nameSurnameErrorMessage);
    expect(NameSurnameErrorMessage).to.equal("Необходимо ввести фамилию, имя, отчество");
  });

  it("As a user, I get correct error message when I want to checkout without filling all required fields", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Атлант расправил плечи");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page,pageFactory.cart.checkoutButton);
    const CheckoutErrorMessage = await pageFactory.mainPage.getText(page,pageFactory.cart.checkoutErrorMessage);
    expect(CheckoutErrorMessage).to.equal("Данный способ оплаты недоступен");
  });

  it("As a user, I can add my Name and Surname for delivery", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "бядуля");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.type(page, pageFactory.cart.nameField,'Овсенкова Анастасия Николаевна ');
    const NameFieldData = await pageFactory.mainPage.getText(page,pageFactory.cart.nameFieldData);
    expect(NameFieldData).to.equal("Овсенкова Анастасия Николаевна");
  });

  it("As a user, I can add items to my favorites", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Человек-бензопила");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.mainPage.click(page,pageFactory.cart.firstItemInCart);
    await pageFactory.cart.moveToFavorites(page);
    await pageFactory.mainPage.click(page,pageFactory.personalAccount.personalAccountButton);
    await pageFactory.mainPage.click(page,pageFactory.personalAccount.favoritesTab);
    const FavoritesTitle = await pageFactory.mainPage.getText(page,pageFactory.personalAccount.favoritesTitle);
    expect(FavoritesTitle).to.contain("Человек-бензопила");
  });

  it("As a user, Can I add a shipping address", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Джейн Эйр");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton);
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page,pageFactory.cart.deliveryAddressButton);
    await pageFactory.mainPage.click(page,pageFactory.cart.addAddress);
    await pageFactory.mainPage.type(page,pageFactory.cart.deliveryStreet,'Плеханова');
    await pageFactory.mainPage.type(page,pageFactory.cart.deliveryHouse, '101');
    await pageFactory.mainPage.type(page,pageFactory.cart.deliveryFlat,'38');
    await pageFactory.mainPage.type(page,pageFactory.cart.deliveryEntrance,'3');
    await pageFactory.mainPage.type(page,pageFactory.cart.deliveryFloor,'3');
    await pageFactory.mainPage.click(page,pageFactory.cart.addAddressButton);
    const DeliveryAddressField = await pageFactory.mainPage.getText(page,pageFactory.cart.deliveryAddressField);
    expect(DeliveryAddressField.trim()).to.equal("ул. Плеханова, дом 101, кв. 38, подъезд 3, этаж 3, г. Минск, Минский район");
  });

  it("As a user, I can add a payment method", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
      // await page.waitForTimeout(2000);
    await pageFactory.search.addToCart(page, "Гарри Поттер и философский камень");
    await pageFactory.mainPage.click(page,pageFactory.cart.cartButton); 
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.mainPage.click(page, pageFactory.cart.paymentMethodField);
    await pageFactory.mainPage.click(page, pageFactory.cart.paymentByInstallmentCard);
    const PaymentMethodFieldData = await pageFactory.mainPage.getText(page,pageFactory.cart.paymentMethodFieldData);
    expect(PaymentMethodFieldData).to.equal("Оплата картой рассрочки Халва");
  });
});
