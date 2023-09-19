import { ViewportType } from './models/enums/viewportType';

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

      logStep(message: string): void;

      changeViewport(type: ViewportType): void;

      assertSort(strArray: string[], descending?: boolean): Chainable<string[]>;

      assertInnerTextEquals(dataTestAttributeName: string, expectedText: string): Chainable<JQuery<HTMLElement>>;

      assertInnerTextContains(dataTestAttributeName: string, expectedText: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
