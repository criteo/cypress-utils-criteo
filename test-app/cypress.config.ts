import { defineConfig } from 'cypress';

export default defineConfig({
  fileServerFolder: 'public',
  fixturesFolder: false,
  screenshotOnRunFailure: false,
  video: false,
  allowCypressEnv: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
