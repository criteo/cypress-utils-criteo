export declare global {
  namespace Cypress {
    interface Chainable {
      dragAndDrop(droppable: string, index?: number): Chainable<JQuery<HTMLElement>>;

      findByTestAttr(
        matcher: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>;

      getByTestAttr(
        matcher: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
