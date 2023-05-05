// const { chromium } = require('playwright');
// const { expect } = require('chai');
// const {Search} = require('../pageobjects/pageComponents/search');

// const search = new Search();

// describe('Testing "Search" function for "Oz" website', () => {
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

//   it('The first search result meets the request', async () => {
//     await page.goto('https://oz.by/');
//     await page.locator(search.SearchField).type('Гарри Поттер');
//     await page.locator(search.SearchButton).click();
//     await page.locator(search.FirstSearchResult).click();
//     const ItemPage = await page.locator(search.ProductName).textContent();
//     expect(ItemPage).to.contain('Гарри Поттер');
//   }); 
  
//   it('The correct message is returned when the search data is invalid', async () => {
//     await page.goto('https://oz.by/');
//     await page.locator(search.SearchField).type('цщцщцкш');
//     await page.locator(search.SearchButton).click();
//     const searchResults = await page.locator(search.InvalidSearchResult).textContent();
//     expect(searchResults).to.contain('По запросу «цщцщцкш» ничего не найдено');
//   });
// });