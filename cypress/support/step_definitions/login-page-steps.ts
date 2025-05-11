import { When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/login-page";


When("I fill in the login form", () => {
  loginPage.enterLogin(Cypress.env('username'));
  loginPage.enterPassword(Cypress.env('password'));
});

When("I click on the login button", () => {
  loginPage.clickLoginButton();
});

