import { test, expect } from "@playwright/test";

test("TC001 - Popup Handling - External Link", async ({ page }) => {
  // open the url
  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  // click on the links button
  await page.locator('//a[@href="#13-links"]').click();

  // Prepare to wait for the popup (new tab/window)
  const page1Event = page.waitForEvent("popup");

  // Click on the external link
  await page.locator('//a[@id="externalLink"]').click();

  // Verify the new tab heading

  //   await page.waitForTimeout(2000);

  const page1Newtab = await page1Event;

  const newTabElement = await page1Newtab.locator("//h1[text()='Example Domain']");

  await expect(newTabElement).toBeVisible();

  // await page.waitForTimeout(10000);
});


test('TC002 - Popup - Handlign by Codegen tool', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  await page.getByRole('link', { name: 'Links' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'External Link' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  await expect(page1.getByRole('heading')).toContainText('Example Domain');
});

test('TC003 - New Window Pop-up', async ({ page }) => {
  await page.goto('https://www.automationtesting.co.uk/popups.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Trigger Pop-up' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByText('This is a selenium popup')).toBeVisible();
  await expect(page1.getByRole('paragraph')).toContainText('This is a selenium popup window');
});