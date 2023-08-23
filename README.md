# cypress-utils-criteo

This package offers custom Cypress commands, recommended checks, and Angular Material selectors to ease the development of Cypress tests.

## Usage

Install this package `npm install cypress-utils-criteo --save-dev`

If you use Typescript: in the `tsconfig.json` file used by Cypress add the types definition: `"types": ["cypress", "cypress-utils-criteo"]` (under `compilerOptions`)

Depending on what you want to use:

For **commands**, in `cypress/support/commands.js`, add:

- `import 'cypress-utils-criteo/commands';` to import all exposed commands
- `import 'cypress-utils-criteo/commands/selectors';` to import specific ones

For **recommended checks**, in `cypress/support/e2e.js`, add:

- `import 'cypress-utils-criteo/recommended-checks';` to import all recommended checks
- `import 'cypress-utils-criteo/recommended-checks/no-open-mat-snack-bar';` to import specific ones

## Commands

### selectors/getByTestAttr

Get one or more DOM elements by their `data-test` attribute.
Internally, it relies on `cy.get`.

Example: `<input data-test="name-input" />` can be retrieved with `cy.getByTestAttr('name-input')`

### selectors/findByTestAttr

Get the descendent DOM element(s) by their `data-test` attribute.
Internally, it relies on `cy.find`.

Example: `<div data-test="form-container"><input data-test="name-input" /></div>` can be retrieved with `cy.getByTestAttr('form-container').findByTestAttr('name-input')`

### drag-and-drop/dragAndDrop

Drag and drop an element in another one.

Example: `cy.getByTestAttr('draggable').dragAndDrop(cy.getByTestAttr('droppable'))`

## Recommended checks

### no-open-mat-snack-bar

Ensures there is no remaining snack bar open once a test ends: it could cover some components in the following tests, prevent Cypress from interacting with them, and make the tests fail.

## Development

Please use Node v16.14.0 and npm v8.3.1

Before submitting a PR, run `npm run build && npm run lint:fix`.
