import { omit, isEqual, pull } from 'lodash';

/**
 * Properties expected on an analytics event when using `cy.checkAnalyticsCall()`.
 */
type AnalyticsEventProperties = Partial<Record<string, unknown>>;

interface AnalyticsEvent {
  properties: AnalyticsEventProperties;
}

let analyticsPropertiesIgnored: string[] = [];

/**
 * Ignores analytics event properties before comparing them in `cy.checkAnalyticsCall()`.
 *
 * This is useful for volatile fields such as timestamps or generated identifiers.
 *
 * @example `setAnalyticsPropertiesToIgnore('timestamp', 'request_id')`
 */
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
  let matchingEvent: AnalyticsEvent | undefined;
  return cy
    .window({ log: false })
    .its('generic-shell-debug-context.analyticsEvents', { log: false })
    .should((events: AnalyticsEvent[]) => {
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
    .then((events: AnalyticsEvent[]) => {
      if (!matchingEvent) {
        throw new Error(`Expected analytics event ${stringifyJson(analyticsEventProperties)} to be captured`);
      }

      return pull(events, matchingEvent);
    });
});

function cleanAnalytics(events: AnalyticsEvent[]) {
  return events.map((event) => event.properties).map((properties) => omit(properties, analyticsPropertiesIgnored));
}

function stringifyJson(object: unknown) {
  return JSON.stringify(object, null, 2);
}

export { setAnalyticsPropertiesToIgnore };
export type { AnalyticsEventProperties };
