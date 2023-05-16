const { chromium } = require("playwright");
const { expect } = require("chai");
const { PageFactory } = require("../app/pageobjects/pageFactory");

describe('Testing Cart for "Oz" website', () => {
  let browser;
  let page;

  before(async () => {
    browser = await chromium.launch({ headless: false });
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  after(async () => {
    await browser.close();
  });

  it("As a user, I can add product to the cart", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.type(
      "searchField",
      "Гарри Поттер и философский камень"
    );
    await pageFactory.search.click("searchButton");
    await pageFactory.search.click("firstSearchResult");
    await pageFactory.itemPage.click("addToCartButton");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    const ItemTitle = await pageFactory.cart.getText("itemTitle");
    expect(ItemTitle).to.contain("Гарри Поттер и философский камень");
  });

  it("As a user, I can delete all products from the cart", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("Цветы для Элджернона");
    await pageFactory.search.addToCart("Календарь");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("checkAllCheckbox");
    await pageFactory.cart.click("cartButton");
    await pageFactory.cart.click("checkAllCheckbox");
    await pageFactory.cart.click("deleteItemButton");
    await pageFactory.cart.click("deletionConfirmationButton");
    const EmptyCartTitle = await pageFactory.cart.getText("emptyCartTitle");
    const formattedTitle = EmptyCartTitle.trim().replaceAll(/\s/g, " ");
    expect(formattedTitle).to.equal(
      "В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:"
    );
  });

  it("As a user, I get correct error message when I want to checkout without Name and Surname", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("Эмили бронте");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("checkoutButton");
    const NameSurnameErrorMessage = await pageFactory.cart.getText(
      "nameSurnameErrorMessage"
    );
    expect(NameSurnameErrorMessage).to.equal(
      "Необходимо ввести фамилию, имя, отчество"
    );
  });

  it("As a user, I get correct error message when I want to checkout without filling all required fields", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("Атлант расправил плечи");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("checkoutButton");
    const CheckoutErrorMessage = await pageFactory.cart.getText(
      "checkoutErrorMessage"
    );
    expect(CheckoutErrorMessage).to.equal("Данный способ оплаты недоступен");
  });

  it("As a user, I can add my Name and Surname for delivery", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("бядуля");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.type("nameField", "Овсенкова Анастасия Николаевна ");
    const NameFieldData = await pageFactory.cart.getText("nameFieldData");
    expect(NameFieldData).to.equal("Овсенкова Анастасия Николаевна");
  });

  it("As a user, I can add items to my favorites", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("Человек-бензопила");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("cartButton");
    await pageFactory.cart.click("firstItemInCart");
    await pageFactory.cart.moveToFavorites();
    await pageFactory.personalAccount.click("personalAccountButton");
    await pageFactory.personalAccount.click("favoritesTab");
    const FavoritesTitle = await pageFactory.personalAccount.getText(
      "favoritesTitle"
    );
    expect(FavoritesTitle).to.contain("Человек-бензопила");
  });

  it("As a user, Can I add a shipping address", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.addToCart("Джейн Эйр");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("deliveryAddressButton");
    await pageFactory.cart.click("addAddress");
    await pageFactory.cart.type("deliveryStreet", "Плеханова");
    await pageFactory.cart.type("deliveryHouse", "101");
    await pageFactory.cart.type("deliveryFlat", "38");
    await pageFactory.cart.type("deliveryEntrance", "3");
    await pageFactory.cart.type("deliveryFloor", "3");
    await pageFactory.cart.click("addAddressButton");
    const DeliveryAddressField = await pageFactory.cart.getText(
      "deliveryAddressField"
    );
    expect(DeliveryAddressField.trim()).to.equal(
      "ул. Плеханова, дом 101, кв. 38, подъезд 3, этаж 3, г. Минск, Минский район"
    );
  });

  it("As a user, I can add a payment method", async () => {
    const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    // await page.waitForTimeout(2000);
    await pageFactory.search.addToCart("Гарри Поттер и философский камень");
    await pageFactory.cart.click("cartButton");
    await pageFactory.loginPage.loginToApplication(
      "nas_nas15@mail.ru",
      "28Am5S"
    );
    await pageFactory.cart.click("paymentMethodField");
    await pageFactory.cart.click("paymentByInstallmentCard");
    const PaymentMethodFieldData = await pageFactory.cart.getText(
      "paymentMethodFieldData"
    );
    expect(PaymentMethodFieldData).to.equal("Оплата картой рассрочки Халва");
  });
});
