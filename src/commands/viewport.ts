const MAX_ANIMATION_TIME = 250;

interface ViewportDimensions {
  width: number;
  height: number;
}

enum ViewportType {
  Mobile = 'mobile',
  Tablet = 'tablet',
  FlexLayoutMedium = 'fxLayout.md',
  FlexLayoutLarge = 'fxLayout.lg',
  HdDesktop = 'hd_desktop',
}

const viewportDimensionsByType: Readonly<Record<ViewportType, ViewportDimensions>> = {
  [ViewportType.Mobile]: { width: 375, height: 667 },
  [ViewportType.Tablet]: { width: 768, height: 1024 },
  [ViewportType.FlexLayoutMedium]: { width: 1024, height: 768 },
  [ViewportType.FlexLayoutLarge]: { width: 1280, height: 768 },
  [ViewportType.HdDesktop]: { width: 1920, height: 1024 },
};
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

export { ViewportType, ViewportDimensions };
