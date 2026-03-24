import { setAnalyticsPropertiesToIgnore } from 'cypress-utils-criteo/commands/analytics';
import { ViewportType } from 'cypress-utils-criteo/commands/viewport';

describe('commands smoke app', () => {
  beforeEach(() => {
    cy.visit('/index.html?param1=123&param2=abc');
  });

  it('registers selector and assertion commands', () => {
    cy.getByTestAttr('form-container').findByTestAttr('name-input').should('have.value', 'Jane Doe');
    cy.assertInnerTextEquals('message-button', 'Click me');
    cy.assertInnerTextContains('message-button', 'Click');
    cy.assertUrlParams(['param1=123', 'param2=abc']);

    cy.assertSort(['A', 'b', 'c']).then((sortedValues) => {
      expect(sortedValues).to.deep.equal(['A', 'b', 'c']);
    });
  });

  it('registers viewport, analytics, and state-management commands', () => {
    cy.changeViewport(ViewportType.Mobile);
    cy.window().its('innerWidth').should('eq', 375);
    cy.window().its('innerHeight').should('eq', 667);

    cy.dispatchActions([{ type: 'InitData' }]).should('deep.equal', [{ type: 'InitData' }]);

    setAnalyticsPropertiesToIgnore('ignored_property');
    cy.checkAnalyticsCall({
      event_type_id: 'EVENT_ID',
      extra_property: 'expected-value',
    });
  });
});
