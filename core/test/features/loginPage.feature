# Feature: Testing Login function for "Oz" website


#     Background:
#         Given I navigate to the OZ website

#     Scenario: As a user, I can't login with invalid email
#         When I click on "loginPage > enterPage" button
#         And I click on "loginPage > loginFromEmail" button
#         And I fill in "loginPage > emailField" field with "asdsaas"
#         And I fill in "loginPage > passwordField" field with "28Am5S"
#         And I click on "loginPage > disabledLoginButton" button
#         Then I expect element "loginPage > loginErrorMessage" is equal to "Введите корректный адрес электронной почты"

#     Scenario: As a user, I can't login with invalid password
#         When I click on "loginPage > enterPage" button
#         And I click on "loginPage > loginFromEmail" button
#         And I fill in "loginPage > emailField" field with "nas_nas15@mail.ru"
#         And I fill in "loginPage > passwordField" field with "asda"
#         And I click on "loginPage > loginButton" button
#         Then I expect element "loginPage > passwordErrorMessage" is equal to "Неверный пароль. Если вы потеряли или забыли пароль — восстановите его"

#     Scenario: As a user, I can login to the application
#         When I click on "loginPage > enterPage" button
#         And I click on "loginPage > loginFromEmail" button
#         And I fill in "loginPage > emailField" field with "nas_nas15@mail.ru"
#         And I fill in "loginPage > passwordField" field with "28Am5S"
#         And I click on "loginPage > loginButton" button
#         And I click on "loginPage > personalAccountButton" button
#         Then I expect element "loginPage > personalAccountHeader" is equal to "oz11865868"

#     Scenario: As a user, I can logout from the application
#         When I search by phrase "Цветы для Элджернона"
#         And I click on "loginPage > enterPage" button
#         And I click on "loginPage > loginFromEmail" button
#         And I fill in "loginPage > emailField" field with "nas_nas15@mail.ru"
#         And I fill in "loginPage > passwordField" field with "28Am5S"
#         And I click on "loginPage > loginButton" button
#         And I click on "loginPage > personalAccountButton" button
#         And I click on "loginPage > exitButton" button
#         Then I expect element "loginPage > enterPage" exists