const { chromium } = require('playwright');
const { expect } = require('chai');
const {Search} = require('../pageobjects/pageComponents/search');
const {MainPage} = require('../pageobjects/mainPage');

describe('Testing "Search" function for "Oz" website', () => {
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

  it('The first search result meets the request', async () => {
    await page.goto('https://oz.by/');

    await page.locator(Search.SearchField).type('Гарри Поттер');
    await page.locator('.top-panel__search__btn__item').click();
    // await page.waitForTimeout(2000);
    await page.locator('.viewer-type-card_has-filter.viewer-type-card li:first-child').click();
    const ItemPage = await page.locator('//*[@class="b-product-title__heading"]/h1').textContent();
    expect(ItemPage).to.contain('Гарри Поттер');
  }); 
  
  it('The correct message is returned when the search data is invalid', async () => {
    await page.goto('https://oz.by/');
    await page.locator('#top-s').type('цщцщцкш');
    await page.locator('.top-panel__search__btn__item').click();
    const searchResults = await page.locator('.breadcrumbs__list__li.active').textContent();
    expect(searchResults).to.contain('По запросу «цщцщцкш» ничего не найдено');
  });
});