import { When } from "@badeball/cypress-cucumber-preprocessor";
import { productsListPage } from "../../pages/products-list-page";

When("I open {string} item's product page", (productNumber: string) => {
    let itemNumber = parseInt(productNumber.match(/\d+/)?.[0] ?? '');
    productsListPage.getProductItem().eq(itemNumber).click();
});