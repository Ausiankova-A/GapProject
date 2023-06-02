const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { PageFactory } = require('../app/pageobjects/pageFactory');
const ph = require('../app/pageHolder');
const logger = require('../app/helpers/loggerCucumber');

const pageFactory = new PageFactory();

Given('I navigate to the OZ website', async function () {
    try {
        await ph.page.goto('https://oz.by/');
        logger.info(`I navigate to https://oz.by/`);
    } catch (error) {
        logger.error('Error occurred:', error);
    }
});

When('I click on {locator} button', async function (locator) {
    try {
        await ph.page.click(locator);
        logger.info(`I click on ${locator}`);
    } catch (error) {
        logger.error('Error occurred:', error);
    }
});

When('I search by phrase {string}', async function (phrase) {
    // await ph.page.waitForTimeout(2000);
    try {
        await ph.page.type(pageFactory.search.searchField, phrase);
        await ph.page.click(pageFactory.search.searchButton);
        logger.info(`I search by phrase ${phrase}`);
    } catch (error) {
        logger.error('Error occurred:', error);
    }
});

When('I fill in {locator} field with {text}', async (string, text) => {
    try {
        await ph.page.type(string, text);
        logger.info(`I fill in ${string} field with ${text}`);
    } catch (error) {
        logger.error('Error occurred:', error);
    }
});

Then(
    'I expect element {locator} is equal to {string}',
    async function (selector, text) {
        const element = await ph.page.locator(selector);
        expect(await element.textContent()).to.equal(text);
    }
);

Then(
    'I expect element {locator} should contain {string}',
    async function (selector, text) {
        const element = await ph.page.locator(selector);
        expect(await element.textContent()).to.contain(text);
    }
);

Then('I expect element {locator} exists', async function (selector) {
    const element = await ph.page.locator(selector);
    expect(await element).to.exist;
});

