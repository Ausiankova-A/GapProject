const { BaseElements } = require("../baseElements");

class LoginPage extends BaseElements {
  constructor(page) {
    super();
    this.page = page;
    this.enterPage = ".top-panel__userbar__auth__ico";
    this.loginFromEmail = "#loginFormLoginEmailLink";
    this.emailField = "#loginForm .i-popup__input:first-child";
    this.passwordField = "#loginForm .i-input_with-padding.i-popup__input";
    this.disabledLoginButton =
      "#loginForm .i-popup__form-button.i-button_disabled";
    this.loginButton = "#loginForm .i-popup__form-button";
    this.loginErrorMessage = "#loginForm .i-popover__line";
    this.passwordErrorMessage =
      '//*[@class="i-input-group__popover i-input-group__popover_login i-input-group__popover_visible"]/div/div/div';
  }
  async loginToApplication(userName, password) {
    await this.page.locator(this.loginFromEmail).click();
    await this.page.locator(this.emailField).type(userName);
    await this.page.locator(this.passwordField).type(password);
    await this.page.locator(this.loginButton).click();
  }
}

module.exports = { LoginPage };
