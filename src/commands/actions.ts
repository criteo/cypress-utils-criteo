/**
 * Clicks on a button element.
 * Internally, it relies on `click()`.
 *
 * @param dataTestAttributeName - The data-test attribute name to locate the button element.
 *
 * @example `cy.clickButton('data-test-submit-button')`
 * @see https://docs.cypress.io/api/commands/click
 */
Cypress.Commands.add('clickButton', (dataTestAttributeName: string) => {
  cy.getByTestAttr(dataTestAttributeName).click();
});

export {};
