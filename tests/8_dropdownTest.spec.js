import { test, expect } from "@playwright/test";

test("TC001 - Dropdrown Test - Single Selection", async ({ page }) => {
  // Open url

  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  // Click on the dropdown link

  await page.locator('//a[@href="#7-dropdown"]').click();

  // Verify the dropdown label is visible

  const dropdownLabel = await page.locator('//label[@for="dropdownField"]');

  await expect(dropdownLabel).toBeVisible();
  await expect(dropdownLabel).toContainText("Choose a car");

  // Find the Dropdown element

  const dropdownElement = await page.locator("//select[@id='dropdownField']");
  await expect(dropdownElement).toBeVisible();

  // Select a choice

  dropdownElement.selectOption("BMW");

  // Verify that the required option is selected successfully 
 const messageElement =  await page.locator("//div[@id='dropdownMsg']");

 await expect(messageElement).toBeVisible();
 await expect(messageElement).toContainText("BMW");

  dropdownElement.screenshot({ path: "screenshots/dropdown.png" });

  await page.waitForTimeout(5000);
});


test.only('TC002 - Dropdown using codegen', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  await page.getByRole('link', { name: '7. Dropdown' }).click();
  await expect(page.getByLabel('Choose a car')).toBeVisible();
  await page.getByLabel('Choose a car').selectOption('Audi');
  await expect(page.locator('#dropdownMsg')).toContainText('Selected Car: Audi');

  await page.waitForTimeout(5000);

});






