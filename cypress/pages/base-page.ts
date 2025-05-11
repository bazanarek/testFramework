class BasePage {
  // Locators
  private accountToggle = '[class="action toggle"]';
  private loginButton = '[class="login-button"]';
  private accountButton = '[class="my-account"]';
  private categoryItem = '[class*="category-item"]';
  private subcategoryItem = '[class*="active-item"] [class*="category-item"]';
  private closePopUpButton = '[id="r-popup-close"]';

  // Actions
  public clickAccountToggle() {
    cy.get(this.accountToggle).click();
  }
  public clickLoginButton() {
    cy.get(this.loginButton).click();
  }
  public clickMyAccount() {
    cy.get(this.accountButton).click();
  }

  public getSubcategoryItem() {
    return cy.get(this.subcategoryItem);
  }

  public selectCategory(category: string) {
    cy.get(this.categoryItem).contains(category).click();
  }
  public getClosePopUpButton() {
    return cy.get(this.closePopUpButton);
  }
}

export const basePage: BasePage = new BasePage();
