import { ViewportType } from './models/enums/viewportType';
import { ViewportDimensions } from './models/viewportDimensions';

export const MAX_ANIMATION_TIME = 250;

export const viewportDimensionsByType: Readonly<Record<ViewportType, ViewportDimensions>> = {
  [ViewportType.Mobile]: { width: 375, height: 667 },
  [ViewportType.Tablet]: { width: 768, height: 1024 },
  [ViewportType.FlexLayoutMedium]: { width: 1024, height: 768 },
  [ViewportType.FlexLayoutLarge]: { width: 1280, height: 768 },
  [ViewportType.HdDesktop]: { width: 1920, height: 1024 },
};
