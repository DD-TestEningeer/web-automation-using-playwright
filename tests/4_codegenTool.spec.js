


// TC001 - Navigate to the https://dd-demo-tau.vercel.app/web_elements.html
// Open the terminal in vs code => run the command in cmd => npx playwright codegen https://dd-demo-tau.vercel.app/web_elements.html

import { test, expect } from '@playwright/test';

test('TC001 - Open URL ', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
});


// TC002 - Verify the Textbox Input Test

test('TC002 - Verify the Textbox Input Test', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  await expect(page.getByRole('link', { name: '1. Text Input' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Text Input' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter text' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter text' }).click();
  await page.getByRole('textbox', { name: 'Enter text' }).fill('Dnyaneshwar D');
  await expect(page.locator('#textInputMsg')).toContainText('Typed: Dnyaneshwar D');
});



// TC003 - Radio Buttons Test


test('TC003 - Radio Buttons Test', async ({ page }) => {
    await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
    await expect(page.getByText('Text Input')).toBeVisible();
    await page.getByRole('link', { name: 'Radio Buttons' }).click();
    await expect(page.getByRole('heading', { name: 'Radio Buttons' })).toBeVisible();
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await expect(page.locator('#radioMsg')).toContainText('Selected Gender: Male');
  });




