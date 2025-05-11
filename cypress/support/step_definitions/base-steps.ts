import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the homepage', () => {
  cy.visit('/');
  cy.disablePopups()
});

Then('I should see the title {string}', (title: string) => {
    return cy.url().should('contain', title);
});
