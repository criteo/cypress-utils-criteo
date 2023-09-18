/**
 * Identifies a test step with separator lines before and after.
 * Internally, it relies on `cy.log`.
 *
 * @example `cy.logStep('Step 1')`
 * @see https://docs.cypress.io/api/commands/log
 */
Cypress.Commands.add('logStep', (message: string) => {
  cy.log('-----------------------------------');
  cy.log(message);
  cy.log('-----------------------------------');
});

export {};
