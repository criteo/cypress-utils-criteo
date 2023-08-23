function testAttr(attr: string) {
  return `[data-test="${attr}"]`;
}

/**
 * Get one or more DOM elements by their `data-test` attribute.
 * Internally, it relies on `cy.get`.
 *
 * @example `<input data-test="name-input" />` can be retrieved with `cy.getByTestAttr('name-input')`
 * @see https://docs.cypress.io/api/commands/get
 */
Cypress.Commands.add('getByTestAttr', { prevSubject: 'optional' }, (subject, attr, options) =>
  subject ? cy.wrap(subject).get(testAttr(attr), options) : cy.get(testAttr(attr), options),
);

/**
 * Get the descendent DOM element(s) by their `data-test` attribute.
 * Internally, it relies on `cy.find`.
 *
 * @example `<div data-test="form-container"><input data-test="name-input" /></div>` can be retrieved with `cy.getByTestAttr('form-container').findByTestAttr('name-input')`
 * @see https://docs.cypress.io/api/commands/find
 */
Cypress.Commands.add('findByTestAttr', { prevSubject: true }, (subject, attr) => cy.wrap(subject).find(testAttr(attr)));

export {};
