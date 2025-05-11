class ShoppingCartPage {
  // Locators
  private totalPrice = '[class="grand totals"] [class="price"]';
  private IncreaseQuantityButton = '[class="qty-arrow more"]';
  private discountCodeInput = '[name="coupon_code"]';
  private applyDiscountButton = '[class="action apply primary"]';
  private applyChangeButton = '[class="primary action update-cart"]';
  private cartSummarySection = '[class="cart-summary"]';
  private cancelDiscountButton = '[class="action cancel primary"]';

  // Actions
  public getShoppingCartTotalPrice = () => {
    return cy.get(this.totalPrice).invoke("text");
  };

  public getApplyChangeButton = () => {
    return cy.get(this.applyChangeButton);
  };

  public getSummarySection = () => {
    return cy.get(this.cartSummarySection);
  };

  public getcancelDiscountButton = () => {
    return cy.get(this.cancelDiscountButton);
  };

  public clickIncreaseQuantityButton = () => {
    cy.get(this.IncreaseQuantityButton).click();
  };

  public enterDiscountCode = (code: string) => {
    cy.get(this.discountCodeInput).click().type(code);
  };

  public clickApplyDiscountButton = () => {
    cy.get(this.applyDiscountButton).click();
  };
}

export const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();
