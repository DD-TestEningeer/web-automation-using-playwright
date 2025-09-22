// import statement
// test - for test case writting and expect for assertions or validations
import { test, expect } from "@playwright/test";
import { Console } from "console";

// async
// await
// page => similar to driver in selenium and cy in cypress

test.skip("Open the webpage url", async ({ page }) => {
  await page.goto("https://dd-demo-tau.vercel.app/playwright-practice.html");

console.log("Page url validation");
  await expect(page).toHaveURL(
    "https://dd-demo-tau.vercel.app/playwright-practice.html"
  );

console.log("Page title validation");

  await expect(page).toHaveTitle("Playwright Locator Practice Forms");
});
