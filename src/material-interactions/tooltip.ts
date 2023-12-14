export class Tooltip {
  static shouldExist(element: Cypress.Chainable<JQuery<HTMLElement>>, texts: string[] = []): void {
    element.trigger('mouseenter');
    cy.get('.mat-tooltip').should('exist');

    for (const text of texts) {
      cy.get('.mat-tooltip').should('contain', text);
    }

    element.trigger('mouseleave');
  }
}
