class AccountPage {
  // Locators
  private pageTitle = '[data-ui-id="page-title-wrapper"]';
  private sidePanel = '[class="title block-collapsible-nav-title"]';
  private dashBoard = '[class="block block-dashboard-info"]';

  // Actions
  public getPageTitle = () => {
    return cy.get(this.pageTitle);
  };
  public getSidePanel = () => {
    return cy.get(this.sidePanel);
  };
  public getDashBoard = () => {
    return cy.get(this.dashBoard);
  };
}

export const accountPage: AccountPage = new AccountPage();
