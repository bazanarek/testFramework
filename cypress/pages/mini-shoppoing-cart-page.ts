class MiniShoppingCartPage {
  // Locators
  private productItemDetails = '[class="product-item-details"]';
  private navigateToMainCartButton = '[class="action primary viewcart"]';

  // Actions
  public getProductItemDetails = () => {
    return cy.get(this.productItemDetails);
  };

  public clickNavigateToMainCartButton = () => {
    cy.get(this.navigateToMainCartButton).click();
  };
}

export const miniShoppingCartPage: MiniShoppingCartPage =
  new MiniShoppingCartPage();
