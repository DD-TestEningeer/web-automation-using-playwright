import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/jsref/met_win_open.asp');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#main div').filter({ hasText: 'Example 1 Open "www.w3schools' }).getByRole('link').click();
  const page1 = await page1Promise;
  await expect(page1.locator('iframe[name="iframeResult"]').contentFrame().getByRole('heading', { name: 'The Window Object' })).toBeVisible();
});