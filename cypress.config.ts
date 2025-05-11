import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    specPattern: './cypress/**/*.feature',
    supportFile: './cypress/support/e2e.ts',
    reporter: 'cypress-mochawesome-reporter',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    baseUrl: 'https://www.skalnik.pl/',
    viewportHeight: 1050,
    viewportWidth: 1680,
    defaultCommandTimeout: 6000
  },
  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
  }
});