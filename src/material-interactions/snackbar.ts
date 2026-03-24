/**
 * Helpers for asserting Angular Material snack bars.
 */
export class Snackbar {
  /**
   * Asserts that a success snack bar is visible, then closes it.
   */
  static successShouldBeVisible(): void {
    cy.get('.mat-mdc-snack-bar-container.success').should('be.visible');
    this.close();
  }

  /**
   * Asserts that an error snack bar is visible, then closes it.
   */
  static errorShouldBeVisible(): void {
    cy.get('.mat-mdc-snack-bar-container.error').should('be.visible');
    this.close();
  }

  private static close(): void {
    this.snackBarContainer.contains('close').click();
    this.snackBarContainer.should('not.exist');
  }

  private static get snackBarContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.mat-mdc-snack-bar-container');
  }
}
