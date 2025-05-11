class ProductPage {
  // Locators
  private productSize = '[id*="option-label-rozmiar"]';
  private addToCartButton = '[class="action primary tocart"]';
  private productName = '[data-ui-id="page-title-wrapper"]';
  private productPrice = '[data-price-type="finalPrice"]';

  // Actions
  public selectSize = (size: string) => {
    cy.get(`[data-option-tooltip-value="${size}"]`).click();
  };

  public clickAddToCartButton = () => {
    cy.get(this.addToCartButton).click();
  };

  public getProductName = () => {
    return cy.get(this.productName).invoke("text");
  };

  public getProductPrice = () => {
    return cy.get(this.productPrice).invoke("text");
  };
}

export const productPage: ProductPage = new ProductPage();
