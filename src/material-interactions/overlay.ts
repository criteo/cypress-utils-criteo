/**
 * Helpers for interacting with Angular Material overlays.
 */
export class Overlay {
  /**
   * Closes the last visible overlay backdrop.
   */
  static close(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.cdk-overlay-backdrop-showing').last().click('bottomLeft');
  }
}
