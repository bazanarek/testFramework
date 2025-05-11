class LoginPage {
  // Locators
  private loginInput = '[id="email"]';
  private passwordInput = '[name="login[password]"]';
  private loginButton = '[id="send2"]';

  // Actions
  enterLogin(login: string) {
    cy.get(this.loginInput).click().type(login);
  }
  enterPassword(password: string) {
    cy.get(this.passwordInput).click().type(password);
  }
  clickLoginButton() {
    cy.get(this.loginButton).first().click();
  }
}

export const loginPage: LoginPage = new LoginPage();
