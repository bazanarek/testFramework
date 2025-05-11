import { When } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../../pages/product-page";

When("I select {string} size", (size: string) => {
  productPage.selectSize(size);
});

When("I click on add to cart button", () => {
  productPage.getProductName().as("productName");
  productPage.getProductPrice().then((text) => {
    cy.wrap(text).as("productPrice");
  });
  productPage.clickAddToCartButton();
});
