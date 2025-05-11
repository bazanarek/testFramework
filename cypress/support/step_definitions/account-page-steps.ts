import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { accountPage } from "../../pages/account-page";

Then("I see I am logged in and I see my account details", () => {
  accountPage.getPageTitle().should("contain", "Moje konto");
  accountPage.getSidePanel().should("contain", "Moje konto");
  accountPage.getDashBoard().should("contain", "Informacje kontaktowe");
});
