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
    await pageFactory.search.type(page, 'searchField', "Гарри Поттер и философский камень");
    await pageFactory.search.click(page,'searchButton');
    await pageFactory.search.click(page,'firstSearchResult');
    await pageFactory.itemPage.click(page,'addToCartButton');
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    const ItemTitle = await pageFactory.cart.getText(page,'itemTitle');
    expect(ItemTitle).to.contain("Гарри Поттер и философский камень");
  });

  it("As a user, I can delete all products from the cart", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Цветы для Элджернона");
    await pageFactory.search.addToCart(page, "Календарь");
    await pageFactory.cart.click(page,'cartButton'); 
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page,'checkAllCheckbox');
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.cart.click(page,'checkAllCheckbox');
    await pageFactory.cart.click(page,'deleteItemButton');
    await pageFactory.cart.click(page,'deletionConfirmationButton');
    const EmptyCartTitle = await pageFactory.cart.getText(page,'emptyCartTitle');
    const formattedTitle = EmptyCartTitle.trim().replaceAll(/\s/g, " ");
    expect(formattedTitle).to.equal("В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:");
  });

  it("As a user, I get correct error message when I want to checkout without Name and Surname", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Эмили бронте");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page,'checkoutButton');
    const NameSurnameErrorMessage = await pageFactory.cart.getText(page,'nameSurnameErrorMessage');
    expect(NameSurnameErrorMessage).to.equal("Необходимо ввести фамилию, имя, отчество");
  });

  it("As a user, I get correct error message when I want to checkout without filling all required fields", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Атлант расправил плечи");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page,'checkoutButton');
    const CheckoutErrorMessage = await pageFactory.cart.getText(page,'checkoutErrorMessage');
    expect(CheckoutErrorMessage).to.equal("Данный способ оплаты недоступен");
  });

  it("As a user, I can add my Name and Surname for delivery", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "бядуля");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.type(page, 'nameField','Овсенкова Анастасия Николаевна ');
    const NameFieldData = await pageFactory.cart.getText(page,'nameFieldData');
    expect(NameFieldData).to.equal("Овсенкова Анастасия Николаевна");
  });

  it("As a user, I can add items to my favorites", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Человек-бензопила");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.cart.click(page,'firstItemInCart');
    await pageFactory.cart.moveToFavorites(page);
    await pageFactory.personalAccount.click(page,'personalAccountButton');
    await pageFactory.personalAccount.click(page,'favoritesTab');
    const FavoritesTitle = await pageFactory.personalAccount.getText(page,'favoritesTitle');
    expect(FavoritesTitle).to.contain("Человек-бензопила");
  });

  it("As a user, Can I add a shipping address", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.addToCart(page, "Джейн Эйр");
    await pageFactory.cart.click(page,'cartButton');
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page,'deliveryAddressButton');
    await pageFactory.cart.click(page,'addAddress');
    await pageFactory.cart.type(page,'deliveryStreet','Плеханова');
    await pageFactory.cart.type(page,'deliveryHouse', '101');
    await pageFactory.cart.type(page,'deliveryFlat','38');
    await pageFactory.cart.type(page,'deliveryEntrance','3');
    await pageFactory.cart.type(page,'deliveryFloor','3');
    await pageFactory.cart.click(page,'addAddressButton');
    const DeliveryAddressField = await pageFactory.cart.getText(page,'deliveryAddressField');
    expect(DeliveryAddressField.trim()).to.equal("ул. Плеханова, дом 101, кв. 38, подъезд 3, этаж 3, г. Минск, Минский район");
  });

  it("As a user, I can add a payment method", async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
      // await page.waitForTimeout(2000);
    await pageFactory.search.addToCart(page, "Гарри Поттер и философский камень");
    await pageFactory.cart.click(page,'cartButton'); 
    await pageFactory.loginPage.loginToApplication(page, "nas_nas15@mail.ru", "28Am5S");
    await pageFactory.cart.click(page, 'paymentMethodField');
    await pageFactory.cart.click(page, 'paymentByInstallmentCard');
    const PaymentMethodFieldData = await pageFactory.cart.getText(page,'paymentMethodFieldData');
    expect(PaymentMethodFieldData).to.equal("Оплата картой рассрочки Халва");
  });
});
