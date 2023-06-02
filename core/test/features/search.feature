Feature: Testing "Search" function for "Oz" website

    Background:
        Given I navigate to the OZ website


    Scenario: As a user, I want to make sure that first search result meets the request
        When I search by phrase "Гарри Поттер"
        And I click on "search > firstSearchResult" button
        Then I expect element "itemPage > productName" should contain "Гарри Поттер"

    Scenario: As a user, I want to make sure that the correct message is returned when the search data is invalid
        When I search by phrase "цщцщцкш"
        Then I expect element "search > invalidSearchResult" is equal to "По запросу «цщцщцкш» ничего не найдено"
