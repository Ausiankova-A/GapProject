Feature: Testing Login function for "Oz" website


    Background:
        Given I navigate to the OZ website

    Scenario: As a user, I can't login with invalid email
        When I click on "Login Page > Enter Page" button
        And I click on "Login Page > Login From Email" button
        And I fill in "Login Page > Email Field" field with "asdsaas"
        And I fill in "Login Page > Password Field" field with "28Am5S"
        And I click on "Login Page > Disabled Login Button" button
        Then I expect element "Login Page > Login Error Message" is equal to "Введите корректный адрес электронной почты"

    Scenario: As a user, I can't login with invalid password
        When I click on "Login Page > Enter Page" button
        And I click on "Login Page > Login From Email" button
        And I fill in "Login Page > Email Field" field with "nas_nas15@mail.ru"
        And I fill in "Login Page > Password Field" field with "asda"
        And I click on "Login Page > Login Button" button
        Then I expect element "Login Page > Password Error Message" is equal to "Неверный пароль. Если вы потеряли или забыли пароль — восстановите его"

    Scenario: As a user, I can login to the application
        When I click on "Login Page > Enter Page" button
        And I click on "Login Page > Login From Email" button
        And I fill in "Login Page > Email Field" field with "nas_nas15@mail.ru"
        And I fill in "Login Page > Password Field" field with "28Am5S"
        And I click on "Login Page > Login Button" button
        And I click on "Personal Account > Personal Account Button" button
        Then I expect element "Personal Account > Personal Account Header" is equal to "oz11865868"

    Scenario: As a user, I can logout from the application
        When I search by phrase "Цветы для Элджернона"
        And I click on "Login Page > Enter Page" button
        And I click on "Login Page > Login From Email" button
        And I fill in "Login Page > Email Field" field with "nas_nas15@mail.ru"
        And I fill in "Login Page > Password Field" field with "28Am5S"
        And I click on "Login Page > Login Button" button
        And I click on "Personal Account > Personal Account Button" button
        And I click on "Personal Account > Exit Button" button
        Then I expect element "Login Page > Enter Page" exists