import { MAX_ANIMATION_TIME, viewportValues } from '../constants';
import { ViewportType } from '../enums/viewportType';

/**
 * Set the viewport to the correct resolution
 * Internally, it relies on `cy.viewport`.
 *
 * @example `cy.changeViewport(ViewportType.Mobile)`
 * @see https://docs.cypress.io/api/commands/viewport
 */
Cypress.Commands.add('changeViewport', (type: ViewportType) => {
  const viewportValue = viewportValues[type];
  cy.viewport(viewportValue.width, viewportValue.height);
  cy.wait(MAX_ANIMATION_TIME);
});

export {};
