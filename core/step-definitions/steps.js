const { Given, When, Then } = require('@cucumber');
const { expect } = require('chai');
const { PageFactory } = require('../app/pageobjects/pageFactory');
const ph = require('../app/pageHolder');


// Given(/^I navigate to the "(.*)" page$/, async (page) => {
//     await browser.url(page);
//     await browser.deleteCookies();
//     await browser.setWindowSize(1920, 1580);
// });


  Given('I navigate to the OZ website', async function () {
    console.log('111')
    await ph.page.goto('https://oz.by/');
  });

When('I click on {locator} button', async function (selector) {
    await $(selector).click();
});
When('I search by phrase {text}', async (phrase) => {
    await $(PageFactory['Search']['Search Field']).waitForClickable();
    await $(PageFactory['Search']['Search Field']).setValue(phrase);
    await $(PageFactory['Search']['Search Field']).waitForClickable();
    await browser.keys('Enter');
});
When('I fill in {locator} field with {text}', async (selector, text) => {
    await $(selector).setValue(text);
});
When('I login to application', async () => {
    await $(PageFactory['Login Page']['Login From Email']).click();
    await $(PageFactory['Login Page']['Email Field']).setValue(
        'nas_nas15@mail.ru'
    );
    await $(PageFactory['Login Page']['Password Field']).setValue('28Am5S');
    await $(PageFactory['Login Page']['Login Button']).click();
});

Then(
    'I expect element {locator} is equal to {text}',
    async (selector, text) => {
        expect(await $(selector).getText()).to.equal(text);
    }
);
Then(
    'I expect element {locator} should contain {text}',
    async (selector, text) => {
        expect(await $(selector).getText()).to.contain(text);
    }
);
Then('I expect element {locator} exists', async (selector) => {
    expect(await $(selector)).to.exist;
});
