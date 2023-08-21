import { testAttr } from './shared';

Cypress.Commands.add('getByTestAttr', { prevSubject: 'optional' }, (subject, attr, options) =>
  subject ? cy.wrap(subject).get(testAttr(attr), options) : cy.get(testAttr(attr), options),
);

Cypress.Commands.add('findByTestAttr', { prevSubject: true }, (subject, attr) => cy.wrap(subject).find(testAttr(attr)));
