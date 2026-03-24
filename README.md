# cypress-utils-criteo

This package provides custom Cypress commands, recommended checks, and Angular Material interaction helpers used at Criteo.

## Usage

Install this package with `npm install --save-dev cypress-utils-criteo`.

Prefer the extensionless import paths documented below, such as `cypress-utils-criteo/commands`.
Compatibility paths ending with `/index.js` are still supported, but they are not the recommended style for new code.

Depending on what you want to use:

For **commands**, import them once from your Cypress support file such as `cypress/support/e2e.ts`:

- `import 'cypress-utils-criteo/commands';` to import all exposed commands
- `import 'cypress-utils-criteo/commands/selectors';` to import specific ones

For **recommended checks**, import them from the same support file:

- `import 'cypress-utils-criteo/recommended-checks';` to import all recommended checks
- `import 'cypress-utils-criteo/recommended-checks/no-open-mat-snack-bar';` to import specific ones

For **material interactions**, import the helpers where you use them:

- `import { Overlay, Snackbar, Tooltip } from 'cypress-utils-criteo/material-interactions';`

## Commands

### selectors/getByTestAttr

Get one or more DOM elements by their `data-test` attribute.
Internally, it relies on `cy.get`.

Example: `<input data-test="name-input" />` can be retrieved with `cy.getByTestAttr('name-input')`

### selectors/findByTestAttr

Get the descendant DOM element(s) by their `data-test` attribute.
Internally, it relies on `cy.find`.

Example: `<div data-test="form-container"><input data-test="name-input" /></div>` can be retrieved with `cy.getByTestAttr('form-container').findByTestAttr('name-input')`

### drag-and-drop/dragAndDrop

Drag and drop an element in another one.

Example: `cy.getByTestAttr('draggable').dragAndDrop(cy.getByTestAttr('droppable'))`

### analytics/checkAnalyticsCall

Checks analytics endpoint was called with expected properties.

Use `setAnalyticsPropertiesToIgnore()` to ignore volatile properties, such as timestamps or generated identifiers, before the comparison.

Example:

```js
cy.checkAnalyticsCall({
  event_type_id: 'EVENT_ID',
  extra_property: 'expected value',
});
```

Example with ignored properties:

```ts
import { setAnalyticsPropertiesToIgnore } from 'cypress-utils-criteo/commands/analytics';

setAnalyticsPropertiesToIgnore('timestamp', 'request_id');
```

### state-management/dispatchActions

Dispatch NGXS actions through the application store exposed on `window.store`.

Controlling state to achieve the desired setup for your test is a best practice (see the [cypress documentation](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State)).

Your store must be exposed in the global window of your app to use it:

```ts
// app.component.ts
constructor(private readonly store: Store) {
  if ('Cypress' in window) {
    window.store = this.store;
  }
}
```

Example: `cy.dispatchActions([{ type: 'InitData' }])`

### logger/logStep

Identifies a test step with separator lines before and after.
Internally, it relies on `cy.log`.

Example: `cy.logStep('Step 1')`

### viewport/changeViewport

Set the viewport to one of the predefined resolutions used by Criteo apps.
Internally, it relies on `cy.viewport`.

Available presets:

- `ViewportType.Mobile`: `375 x 667`
- `ViewportType.Tablet`: `768 x 1024`
- `ViewportType.FlexLayoutMedium`: `1024 x 768`
- `ViewportType.FlexLayoutLarge`: `1280 x 768`
- `ViewportType.HdDesktop`: `1920 x 1024`

Example:

```ts
import { ViewportType } from 'cypress-utils-criteo/commands/viewport';

cy.changeViewport(ViewportType.Mobile);
```

### assertions/assertSort

Assert that an array is already sorted in the correct order, ignoring case.
Internally, it relies on `cy.should` and deep equality assertion.

Example: `cy.assertSort(['A', 'b', 'c'])`

### assertions/assertInnerTextEquals

Assert that the inner text of an element matches the expected text after trimming.

Example: `cy.assertInnerTextEquals('data-test-button', 'Click me')`

### assertions/assertInnerTextContains

Assert that the inner text of an element contains the expected text.

Example: `cy.assertInnerTextContains('data-test-button', 'Partial text')`

### assertions/assertUrlParams

Assert that the current URL contains the specified query parameters.
Internally, it relies on `cy.url`.

Example: `cy.assertUrlParams(['param1=123', 'param2=abc'])`

## Recommended checks

### no-open-mat-snack-bar

Ensures there is no remaining snack bar open once a test ends: it could cover some components in the following tests, prevent Cypress from interacting with them, and make the tests fail.

## Material interactions

### Overlay

Allows to close overlays (used for dropdowns, selects, dialogs, ...).

Example: `Overlay.close()`

### Snackbar

Allows to easily check the status of a snackbar. The snackbar is closed automatically.

Example: `Snackbar.successShouldBeVisible()` or `Snackbar.errorShouldBeVisible()`

### Tooltip

Allows to easily check whether a tooltip exists and contains some texts (optional).

Example: `Tooltip.shouldExist(cy.getByTestAttr('help-icon'), ['The tooltip should contain this text.', 'It should also contain this one.'])`

## Development

Use Node 20.1+.

Before submitting a PR, run `npm run lint:fix` and `npm test`.
