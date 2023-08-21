/**
 * Ensures there is no remaining snack bar open once a test ends: it could cover some components
 * in the following tests, prevent Cypress from interacting with them, and make the tests fail.
 */

const checkSnackbar = () => cy.get('.mat-snack-bar-container').should('not.exist');

beforeEach(checkSnackbar);
afterEach(checkSnackbar);
