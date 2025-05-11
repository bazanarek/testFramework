export {};

declare global {
  namespace Cypress {
    interface Chainable {
      disablePopups(): Chainable<null>;
    }
  }
}

Cypress.Commands.add("disablePopups", () => {
  cy.setCookie("cookieConsentGranted", "1");
  cy.setCookie("prnewsletterpopup_disable_popup_9", "yes");
  cy.setCookie("prnewsletterpopup_disable_popup_12", "yes");
  cy.reload();
  cy.wait(1000);
  cy.scrollTo("top");
});