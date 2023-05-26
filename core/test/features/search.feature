Feature: Testing "Search" function for "Oz" website

    Background:
        Given I navigate to the "https://oz.by/" page


    Scenario: As a user, I want to make sure that first search result meets the request
        When I search by phrase "Гарри Поттер"
        And I click on "Search > First Search Result" button
        Then I expect element "Item Page > Product Name" should contain "Гарри Поттер"

    Scenario: As a user, I want to make sure that the correct message is returned when the search data is invalid
        When I search by phrase "цщцщцкш"
        Then I expect element "Search > Invalid Search Result" is equal to "По запросу «цщцщцкш» ничего не найдено"
