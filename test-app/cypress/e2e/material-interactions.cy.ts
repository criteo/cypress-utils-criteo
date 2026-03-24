import { Overlay, Snackbar, Tooltip } from 'cypress-utils-criteo/material-interactions';

describe('material interactions smoke app', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('supports overlay, snackbar, and tooltip helpers', () => {
    cy.getByTestAttr('open-overlay').click();
    Overlay.close();
    cy.getByTestAttr('overlay-status').should('have.text', 'closed');

    cy.getByTestAttr('show-snackbar').click();
    Snackbar.successShouldBeVisible();
    cy.get('.mat-mdc-snack-bar-container').should('not.exist');

    Tooltip.shouldExist(cy.getByTestAttr('help-icon'), ['Tooltip text', 'Additional tooltip text']);
    cy.get('.mdc-tooltip__surface').should('not.exist');
  });
});
