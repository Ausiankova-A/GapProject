const { expect } = require("chai");
const { PageFactory } = require("../app/pageobjects/pageFactory");

describe('Testing "Search" function for "Oz" website', () => {
    const pageFactory = new PageFactory();
    it("The first search result meets the request", async () => {
        await pageFactory.mainPage.navigate("https://oz.by/");
        await pageFactory.search.type("searchField", "Гарри Поттер");
        await pageFactory.search.click("searchButton");
        await pageFactory.search.click("firstSearchResult");
        const itemPage = await pageFactory.search.getText("productName");
        expect(itemPage).to.contain("Гарри Поттер");
    });

    it("The correct message is returned when the search data is invalid", async () => {
        await pageFactory.mainPage.navigate("https://oz.by/");
        await pageFactory.search.type("searchField", "цщцщцкш");
        await pageFactory.search.click("searchButton");
        const searchResults = await pageFactory.search.getText(
            "invalidSearchResult"
        );
        expect(searchResults).to.contain(
            "По запросу «цщцщцкш» ничего не найдено"
        );
    });
});
