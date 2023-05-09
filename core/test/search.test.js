const { chromium } = require('playwright');
const { expect } = require('chai');
const {PageFactory} = require('../pageobjects/pageFactory');

const pageFactory = new PageFactory();

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
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.mainPage.type(page,pageFactory.search.searchField,'Гарри Поттер');
    await pageFactory.mainPage.click(page,pageFactory.search.searchButton);
    await pageFactory.mainPage.click(page,pageFactory.search.firstSearchResult);
    const itemPage = await pageFactory.mainPage.getText(page, pageFactory.search.productName);
    expect(itemPage).to.contain('Гарри Поттер');
  }); 
  
  it('The correct message is returned when the search data is invalid', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.mainPage.type(page,pageFactory.search.searchField,'цщцщцкш');
    await pageFactory.mainPage.click(page,pageFactory.search.searchButton);
    const searchResults = await pageFactory.mainPage.getText(page, pageFactory.search.invalidSearchResult);
    expect(searchResults).to.contain('По запросу «цщцщцкш» ничего не найдено');
  });
});