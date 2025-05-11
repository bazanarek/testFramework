import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { miniShoppingCartPage } from "../../pages/mini-shoppoing-cart-page";
import { basePage } from "../../pages/base-page";
import { shoppingCartPage } from "../../pages/shopping-cart-page";
import { getDiscountCode } from "../utils/getDiscountCode";

Then("I see added item in the mini shopping cart", () => {
  cy.get("@productName").then((text) => {
    miniShoppingCartPage.getProductItemDetails().should("contain", text);
  });
});

Then("I click navigate to shopping cart", () => {
  basePage.getClosePopUpButton();
  miniShoppingCartPage.clickNavigateToMainCartButton();
});

Then("I see {int} product price as total price", (quantity: number) => {
  cy.get("@productPrice").then((price) => {
    const expectedTotal = formatPriceToFloat(String(price)) * quantity;
    shoppingCartPage
      .getShoppingCartTotalPrice()
      .should("contain", formatPriceToString(expectedTotal));
  });
});

Then("I increase quantity to {int}", (quantity: number) => {
  for (let i = 1; i < quantity; i++) {
    shoppingCartPage.clickIncreaseQuantityButton();
  }
  shoppingCartPage.getApplyChangeButton().click();
});

When("I apply {string} discount code", (discountValue: string) => {
  shoppingCartPage.getShoppingCartTotalPrice().then((initialPrice) => {
    cy.wrap(initialPrice).as("totalPriceBeforeDiscount");

    getDiscountCode(discountValue).then((code) => {
      shoppingCartPage.enterDiscountCode(code);
      shoppingCartPage.clickApplyDiscountButton();
    });
  });
});

Then("I see discount code is applied", () => {
  shoppingCartPage.getSummarySection().should("contain", "Zniżka");
  shoppingCartPage.getcancelDiscountButton().should("exist");
});

Then("I see total price is reduce by {string}", (discountValue: string) => {
  let discount = parseFloat(discountValue) / 100;

  cy.get("@totalPriceBeforeDiscount").then((price) => {
    const expectedTotal =
      formatPriceToFloat(String(price)) -
      Math.round(formatPriceToFloat(String(price)) * discount);
    shoppingCartPage
      .getShoppingCartTotalPrice()
      .should("contain", formatPriceToString(expectedTotal));
  });
});

function formatPriceToFloat(priceString: string): number {
  const cleaned = priceString.replace(/[^\d,.-]+/g, "").replace(",", ".");

  return parseFloat(cleaned);
}

function formatPriceToString(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
