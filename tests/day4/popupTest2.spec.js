import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  await page.getByRole('link', { name: 'Links' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'External Link' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  await expect(page1.getByRole('heading')).toContainText('Example Domain');
});