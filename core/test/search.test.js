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
    await pageFactory.search.type(page,'searchField','Гарри Поттер');
    await pageFactory.search.click(page,'searchButton');
    await pageFactory.search.click(page,'firstSearchResult');
    const itemPage = await pageFactory.search.getText(page,'productName');
    expect(itemPage).to.contain('Гарри Поттер');
  }); 
  
  it('The correct message is returned when the search data is invalid', async () => {
    await pageFactory.mainPage.navigate(page, "https://oz.by/");
    await pageFactory.search.type(page,'searchField','цщцщцкш');
    await pageFactory.search.click(page,'searchButton');
    const searchResults = await pageFactory.search.getText(page, 'invalidSearchResult');
    expect(searchResults).to.contain('По запросу «цщцщцкш» ничего не найдено');
  });
});