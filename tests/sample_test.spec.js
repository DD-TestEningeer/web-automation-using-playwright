import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.playwright.dev/', { timeout: 60000 }); // Increase to 60 seconds


});