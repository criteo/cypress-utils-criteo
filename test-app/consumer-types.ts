import 'cypress-utils-criteo/commands';
import 'cypress-utils-criteo/recommended-checks';
import { setAnalyticsPropertiesToIgnore } from 'cypress-utils-criteo/commands/analytics';
import { ViewportType } from 'cypress-utils-criteo/commands/viewport';
import { Overlay, Snackbar, Tooltip } from 'cypress-utils-criteo/material-interactions';

setAnalyticsPropertiesToIgnore('ignored_property');

void Overlay;
void Snackbar;
void Tooltip;

cy.changeViewport(ViewportType.Mobile);
cy.getByTestAttr('smoke-root');
cy.assertInnerTextContains('message-button', 'Click');

export {};
