const logger = require('../../../logger');
const {getPage} = require('../../test/globalHooks');

console.log(getPage());

class BaseElements {
  constructor() {
    this.page = getPage();
  }
  async click(elementName) {
    const selector = this[elementName];
    await this.page.waitForSelector(selector, {
      waitFor: "visible",
      timeout: 10000,
    });
    logger.error('`Click: ${elementName}`');
    return this.page.locator(selector).click();
  }

  async type(elementName, product) {
    const selector = this[elementName];
    logger.error('`Type: ${product} to ${elementName}`');
    await this.page.locator(selector).type(product);
  }

  async getText(elementName) {
    const selector = this[elementName];
    logger.error('`Get text: ${elementName}`');
    return await this.page.locator(selector).textContent();
  }

  // async getRole(elementName) {
  //   const selector = this[elementName];
  //   return await this.page.locator(selector).innerText();
  // }

  async navigate(url) {
    logger.error('`Navigated to: ${url}`');
    return await this.page.goto(url);
   
  }
}

module.exports = { BaseElements };
