// const { chromium } = require("playwright");
const { expect } = require("chai");
const { PageFactory } = require("../app/pageobjects/pageFactory");



const pageFactory = new PageFactory();

describe('Testing "Search" function for "Oz" website', () => {
  // let page;
  // let browser;

  // before(async () => {
  //   // browser = await chromium.launch({ headless: false });
  //   browser = await ph.initBrowser();
  // });

  // // after(async () => {
  // //   await browser.close();
  // // });

  // beforeEach(async () => {
  //   page = await ph.openPage(browser);
  //   pageFactory.setPage(page);
  // });

  // afterEach(async () => {
  //   await page.close();
  // });

  it("The first search result meets the request", async () => {
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.type("searchField", "Гарри Поттер");
    await pageFactory.search.click("searchButton");
    await pageFactory.search.click("firstSearchResult");
    const itemPage = await pageFactory.search.getText("productName");
    expect(itemPage).to.contain("Гарри Поттер");
  });

  it("The correct message is returned when the search data is invalid", async () => {
    // const pageFactory = new PageFactory(page);
    await pageFactory.mainPage.navigate("https://oz.by/");
    await pageFactory.search.type("searchField", "цщцщцкш");
    await pageFactory.search.click("searchButton");
    const searchResults = await pageFactory.search.getText(
      "invalidSearchResult"
    );
    expect(searchResults).to.contain("По запросу «цщцщцкш» ничего не найдено");
  });
});
