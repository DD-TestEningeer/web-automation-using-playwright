import { test, expect } from "@playwright/test";

test("TC001 - Multi-Selection Dropdown Test", async ({ page }) => {
  // open url

  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  // click on the left side menu to open the multi select section
  await page.locator('//a[@href="#8-multiselect"]').click();

  // Label validation
  const multiLabel = await page.locator('//label[@for="multiSelectField"]');
  await expect(multiLabel).toBeVisible();

  // Selecting multiple options

  const multiSelectDropdown = await page.locator('//select[@id="multiSelectField"]');

  multiSelectDropdown.selectOption(["Apple", "Banana", "Mango"]);

  await page.waitForTimeout(5000);
});
