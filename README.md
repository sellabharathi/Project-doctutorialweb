# Project-doctutorialweb
Playwright Installation and Setup Guide

This document outlines the steps to install and run Playwright for automated testing.

1. Prerequisites

Node.js v18 or higher

npm (comes with Node.js)

To check:

node -v
npm -v

If not installed, download from: https://nodejs.org

2. Initialize a New Project (if not already done)

mkdir my-playwright-project
cd my-playwright-project
npm init -y

3. Install Playwright

npm install --save-dev @playwright/test

This installs Playwright Test and its dependencies.

4. Install Browsers

npx playwright install

This will download Chromium, Firefox, and WebKit.

5. Folder Structure (Recommended)
my-playwright-project/
├── tests/
│   └── example.spec.ts
├── playwright.config.ts
├── package.json

6. Create Your First Test
File: tests/example.spec.ts

import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

7. Run Tests
npx playwright test
Run in headed mode:
npx playwright test --headed
Run with debugger:
npx playwright test --debug

8. Add Useful Scripts to package.json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "test:debug": "npx playwright test --debug",
  "install:browsers": "npx playwright install"
}
Then you can run tests with:

npm test

9. GitHub Actions Integration (Optional)
Create .github/workflows/playwright.yml for CI/CD integration.

Done!
You're now ready to write and run Playwright tests.
