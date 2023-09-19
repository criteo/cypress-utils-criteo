/**
 * Assert that an array is sorted in the correct order, ignoring case.
 * Internally, it relies on `cy.should` and deep equality assertion.
 *
 * @example `cy.assertSort(['Z', 'Y', 'X'], true)`
 * @see https://docs.cypress.io/api/commands/should
 */
Cypress.Commands.add('assertSort', (strArray: string[], descending?: boolean) => {
  const actual = strArray.slice();
  const expected = strArray.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
  if (descending) {
    expected.reverse();
  }

  return cy.wrap(actual).should('deep.equal', expected);
});

export {};
