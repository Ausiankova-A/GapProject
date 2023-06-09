const { BaseElements } = require('../baseElements.js');
const logger = require('../../helpers/logger.js');

class LoginPage extends BaseElements {
    constructor() {
        super();
        this.enterPage = '.top-panel__userbar__auth__ico';
        this.loginFromEmail = '#loginFormLoginEmailLink';
        this.emailField = '#loginForm .i-popup__input:first-child';
        this.passwordField = '#loginForm .i-input_with-padding.i-popup__input';
        this.disabledLoginButton =
            '#loginForm .i-popup__form-button.i-button_disabled';
        this.loginButton = '#loginForm .i-popup__form-button';
        this.loginErrorMessage = '#loginForm .i-popover__line';
        this.passwordErrorMessage =
            '//*[@class="i-input-group__popover i-input-group__popover_login i-input-group__popover_visible"]/div/div/div';
            this.personalAccountButton = '.top-panel__userbar__user__name__inner';
            this.personalAccountHeader = '.l-row-user-name h1';
            this.exitButton = '.l-col-3 .uc-nav.uc-nav-last li a'
    }
    async loginToApplication(userName, password) {
        try {
            await this.page.locator(this.loginFromEmail).click();
            await this.page.locator(this.emailField).type(userName);
            await this.page.locator(this.passwordField).type(password);
            await this.page.locator(this.loginButton).click();
            logger.info(`I login to application with login ${userName} and password ${password}`);
        } catch (error) {
            logger.error('Error occurred:', error);
        }
    }
}

module.exports = { LoginPage };
