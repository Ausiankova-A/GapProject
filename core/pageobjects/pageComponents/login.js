class LoginPage {
    constructor() {
        this.EnterPage = ".top-panel__userbar__auth__ico";
        this.LoginFromEmail = "#loginFormLoginEmailLink";
        this.EmailField = "#loginForm .i-popup__input:first-child";
        this.PasswordField = "#loginForm .i-input_with-padding.i-popup__input";
        this.DisabledLoginButton = "#loginForm .i-popup__form-button.i-button_disabled";
        this.LoginButton = "#loginForm .i-popup__form-button";
        this.LoginErrorMessage = "#loginForm .i-popover__line";
        this.PasswordErrorMessage = '//*[@class="i-input-group__popover i-input-group__popover_login i-input-group__popover_visible"]/div/div/div';
  }
    async loginToApplication(page, userName, password) {
        await page.locator(this.LoginFromEmail).click();
        await page.locator(this.EmailField).type(userName);
        await page.locator(this.PasswordField).type(password);
        await page.locator(this.LoginButton).click()
  }
}

module.exports = { LoginPage };
