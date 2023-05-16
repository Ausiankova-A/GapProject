class BaseElements {
  constructor(page) {
    this.page = page;
  }
  async click(elementName) {
    const selector = this[elementName];
    await this.page.waitForSelector(selector, {
      waitFor: "visible",
      timeout: 10000,
    });
    return this.page.locator(selector).click();
  }

  async type(elementName, product) {
    const selector = this[elementName];
    await this.page.locator(selector).type(product);
  }

  async getText(elementName) {
    const selector = this[elementName];
    return await this.page.locator(selector).textContent();
  }

  async getRole(elementName) {
    const selector = this[elementName];
    return await this.page.locator(selector).innerText();
  }

  async navigate(url) {
    return this.page.goto(url);
  }
}

module.exports = { BaseElements };
