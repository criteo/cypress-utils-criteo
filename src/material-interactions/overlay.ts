export class Overlay {
  static close(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.cdk-overlay-backdrop-showing').last().click('bottomLeft');
  }
}
