export class Snackbar {
  static successShouldBeVisible(): void {
    cy.get('.mat-snack-bar-container.success').should('be.visible');
    this.close();
  }

  static errorShouldBeVisible(): void {
    cy.get('.mat-snack-bar-container.error').should('be.visible');
    this.close();
  }

  private static close(): void {
    this.snackBarContainer.contains('close').click();
    this.snackBarContainer.should('not.exist');
  }

  private static get snackBarContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.mat-snack-bar-container');
  }
}
