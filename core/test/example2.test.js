const { chromium } = require('playwright');
const { expect } = require('chai');

describe(' My test suite', () => {
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

  it('bla should navigate to Google', async () => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).to.equal('Google');
  });  
});