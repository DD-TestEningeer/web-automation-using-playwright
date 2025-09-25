import { test, expect } from "@playwright/test";

test("TC001 - Dropdown test - Single Selection", async ({ page }) => {
  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  await expect(page).toHaveURL(
    "https://dd-demo-tau.vercel.app/web_elements.html"
  );

  await expect(page).toHaveTitle(
    "Playwright Combined Practice — QA Playground"
  );

  await page.getByRole("link", { name: "7. Dropdown" }).click();

  const dropdownElement = await page.getByLabel("Choose a car");
  await expect(dropdownElement).toBeVisible();

  //   await dropdownElement.selectOption("BMW");

  //   await dropdownElement.selectOption(['BMW']);

  await dropdownElement.selectOption({ label: "BMW" });

  await page.screenshot({ path: "screenshots/dropdown.png" });

  await page.waitForTimeout(5000);
});

test("TC002 - Dropdown test - Multiple Selection", async ({ page }) => {
  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  await expect(page).toHaveURL(
    "https://dd-demo-tau.vercel.app/web_elements.html"
  );

  await expect(page).toHaveTitle(
    "Playwright Combined Practice — QA Playground"
  );

  await page.getByRole("link", { name: "8. Multi-Select" }).click();

  const multiDropdownElement = await page.getByLabel("Fruits");
  await expect(multiDropdownElement).toBeVisible();

  await multiDropdownElement.selectOption(["Apple", "Banana"]);

  await page.screenshot({ path: "screenshots/multidropdown.png" });

  await page.waitForTimeout(5000);
});
