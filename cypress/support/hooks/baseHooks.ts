import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@mockCookiesAccepted' }, () => {
  cy.setCookie('cookieConsentGranted', '1');
  cy.setCookie('prnewsletterpopup_disable_popup_9', 'yes');
  cy.setCookie('prnewsletterpopup_disable_popup_12', 'yes');
  cy.reload();
});