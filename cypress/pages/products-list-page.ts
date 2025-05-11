class ProductsListPage {
  // Locators
  private productItem = '[class="product-item-info"]';

  // Actions
  public getProductItem = () => {
    return cy.get(this.productItem);
  };
}

export const productsListPage: ProductsListPage = new ProductsListPage();
