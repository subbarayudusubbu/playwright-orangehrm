// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           // folder where your tests are located
  timeout: 60 * 1000,           // max time for each test (60s)
  expect: {
    timeout: 5000,               // max time for expect assertions
  },
  retries: 1,                    // retry failed tests once
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    headless: false,             // run tests in headed mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    
    // Screenshots and videos
    screenshot: 'on',  // capture screenshot on failure
    video: 'retain-on-failure',     // record video only if test fails
    trace: 'on-first-retry',        // trace enabled for first retry of failed test

    // Base URL for tests (optional)
   
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 14'] },
    },
  ],

  // Global setup/teardown if needed (optional)
  /* globalSetup: require.resolve('./global-setup'),
     globalTeardown: require.resolve('./global-teardown'), */
});
