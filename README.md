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

### `selectors/getByTestAttr`

TODO DOC

### `selectors/findByTestAttr`

TODO DOC

### `drag-and-drop/dragAndDrop`

TODO DOC

## Recommended checks

### `no-open-mat-snack-bar`

Ensures there is no remaining snack bar open once a test ends: it could cover some components in the following tests, prevent Cypress from interacting with them, and make the tests fail.

## Development

Please use Node v16.14.0 and npm v8.3.1
