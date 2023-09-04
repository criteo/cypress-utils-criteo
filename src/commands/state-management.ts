/**
 * Dispatch ngxs actions
 * @example cy.dispatchActions([{ type: 'InitData' }])
 */
Cypress.Commands.add('dispatchActions', (actions) => cy.window().its('store').invoke('dispatch', actions));

export {};
