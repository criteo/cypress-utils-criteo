import { ViewportType } from './enums/viewportType'; // Replace with the correct path to the file where ViewportType is defined

export declare global {
  namespace Cypress {
    interface Chainable {
      dragAndDrop(droppable: Chainable<JQuery<HTMLElement>>): Chainable<JQuery<HTMLElement>>;

      findByTestAttr(
        matcher: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>;

      getByTestAttr(
        matcher: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>;

      checkAnalyticsCall(analyticsEventProperties: AnalyticsEventProperties): void;

      dispatchActions(actions: unknown[]): Chainable<JQuery>;

      changeViewport(type: ViewportType): void;
    }
  }
}
