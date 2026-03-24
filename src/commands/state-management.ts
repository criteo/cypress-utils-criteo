/**
 * Dispatch NGXS actions through the store exposed on `window.store`.
 *
 * Your application must expose a compatible store object with a `dispatch` method.
 *
 * @example cy.dispatchActions([{ type: 'InitData' }])
 */
Cypress.Commands.add('dispatchActions', (actions) => cy.window().its('store').invoke('dispatch', actions));

export {};
