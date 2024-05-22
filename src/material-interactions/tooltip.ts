export class Tooltip {
  static shouldExist(element: Cypress.Chainable<JQuery<HTMLElement>>, texts: string[] = []): void {
    element.trigger('mouseenter');
    cy.get('.mdc-tooltip__surface').should('exist');

    for (const text of texts) {
      cy.get('.mdc-tooltip__surface').should('contain', text);
    }

    element.trigger('mouseleave');
  }
}
