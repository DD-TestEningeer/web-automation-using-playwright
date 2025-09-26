import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 60000,  // Global timeout for all tests,

  reporter: [['html', { open: 'always' }]],

  // reporter: [
  //   ['list'],
  //   ['allure-playwright']
  // ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});




/* const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({

    // Test timeout (in milliseconds)
    timeout: 60000,  // Global timeout for all tests
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  reporter: "allure-playwright",

  use: {
    trace: "on",
    navigationTimeout: 60000,  // Timeout for page.goto (in milliseconds)
    // Optionally set default waitUntil for page.goto
    waitUntil: 'load',  // or 'domcontentloaded' or 'networkidle'
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        video: {
          mode: "on",
          size: { width: 1280, height: 720 },
        },
      },
      outputDir: "videos", // Saves videos, traces
    },
  ],
});

*/

// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   projects: [
//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//         // It is important to define the `viewport` property after destructuring `devices`,
//         // since devices also define the `viewport` for that device.
//         viewport: { width: 1280, height: 720 },
//         video: 'on',
//       },
//       outputDir: 'reports/videos', // <- This sets where videos (and traces, screenshots) are saved
//     },
//   ]
// });

// // @ts-check
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
// // @see https://playwright.dev/docs/test-configuration

// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     // {
//     //   name: 'firefox',
//     //   use: { ...devices['Desktop Firefox'] },
//     // },

//     // {
//     //   name: 'webkit',
//     //   use: { ...devices['Desktop Safari'] },
//     // },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });
