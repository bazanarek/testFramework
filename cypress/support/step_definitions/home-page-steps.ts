import { When } from "@badeball/cypress-cucumber-preprocessor";
import { basePage } from "../../pages/base-page";

When("I navigate to login page", () => {
  basePage.clickAccountToggle();
  basePage.clickLoginButton();
});

When("I navigate to my account page", () => {
  cy.scrollTo('top');
  cy.wait(1000);
  basePage.clickAccountToggle();
  basePage.clickMyAccount();
});

When("I open {string} category", (category: string) => {
  basePage.selectCategory(category);
});

When("I select {string} subcategory", (subcategory: string) => {
  let categoryNumber = parseInt(subcategory.match(/\d+/)?.[0] ?? '');
  basePage.getSubcategoryItem().eq(categoryNumber).click();
});