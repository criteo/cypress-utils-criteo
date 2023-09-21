import { omit, isEqual, pull } from 'lodash';

declare type AnalyticsEventProperties = Partial<Record<string, unknown>>;

interface Event {
  properties: string[];
}

let analyticsPropertiesIgnored: string[] = [];

function setAnalyticsPropertiesToIgnore(...properties: string[]) {
  analyticsPropertiesIgnored = [...properties];
}

/**
 * Checks analytics endpoint was called with expected properties.
 *
 * @example `cy.checkAnalyticsCall({
 *      event_type_id: 'EVENT_ID',
 *      extra_property: value
 *    });`
 */
Cypress.Commands.add('checkAnalyticsCall', (analyticsEventProperties: AnalyticsEventProperties) => {
  cy.log('Expect analytics event to be sent:', analyticsEventProperties);
  let matchingEvent: Event;
  return cy
    .window({ log: false })
    .its('generic-shell-debug-context.analyticsEvents', { log: false })
    .should((events) => {
      const eventsProperties = cleanAnalytics(events);
      const matchingEventIndex = eventsProperties.findIndex((event) => isEqual(event, analyticsEventProperties));

      if (matchingEventIndex === -1) {
        throw new Error(
          `Expected analytics event ${stringifyJson(analyticsEventProperties)} not found in ${stringifyJson(
            eventsProperties,
          )}`,
        );
      } else {
        matchingEvent = events[matchingEventIndex];
      }
    })
    .then((events) => pull(events, matchingEvent));
});

function cleanAnalytics(events: Event[]) {
  return events.map((event) => event.properties).map((properties) => omit(properties, analyticsPropertiesIgnored));
}

function stringifyJson(object: unknown) {
  return JSON.stringify(object, null, 2);
}

export { AnalyticsEventProperties, setAnalyticsPropertiesToIgnore };
