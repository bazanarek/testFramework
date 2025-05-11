Feature: Sample tests for skalnik.pl

  Background: Open the homepage
    Given I open the homepage
    Then I should see the title "skalnik"

  Scenario: Logging in
    When I navigate to login page
    And I fill in the login form
    And I click on the login button
    And I navigate to my account page
    Then I see I am logged in and I see my account details

  Scenario: Add item to the shopping cart
    When I open "Odzież" category
    And I select "2nd" subcategory
    And I open "4th" item's product page
    And I select "M" size
    And I click on add to cart button
    Then I see added item in the mini shopping cart

  Scenario: Add item to the shopping cart and apply discount code
    When I open "Odzież" category
    And I select "3rd" subcategory
    And I open "2nd" item's product page
    And I select "L" size
    And I click on add to cart button
    And I click navigate to shopping cart
    Then I see 1 product price as total price
    When I increase quantity to 2
    Then I see 2 product price as total price
    When I apply "<discountCode>" discount code
    Then I see discount code is applied
    And I see total price is reduce by "<discountCode>"

    Examples:
      | discountCode |
      | 10%          |
