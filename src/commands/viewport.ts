import { MAX_ANIMATION_TIME, viewportDimensionsByType } from '../constants';
import { ViewportType } from '../models/enums/viewportType';

/**
 * Set the viewport to the correct resolution
 * Internally, it relies on `cy.viewport`.
 *
 * @example `cy.changeViewport(ViewportType.Mobile)`
 * @see https://docs.cypress.io/api/commands/viewport
 */
Cypress.Commands.add('changeViewport', (type: ViewportType) => {
  const viewportDimensions = viewportDimensionsByType[type];
  cy.viewport(viewportDimensions.width, viewportDimensions.height);
  cy.wait(MAX_ANIMATION_TIME);
});

export {};
