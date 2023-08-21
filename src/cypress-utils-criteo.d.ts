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
    }
  }
}
