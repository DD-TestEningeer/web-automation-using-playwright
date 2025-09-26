import { test, expect } from "@playwright/test";
const path = require('path');
test("TC001 - Upload File Demo", async ({ page }) => {
  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");
  await page.getByRole("link", { name: "File Upload" }).click();
  // await page.getByRole("button", { name: "Choose file" }).click();
  await page.getByRole("button", { name: "Choose file" }).setInputFiles("testData.json");
 
  // await page.getByRole("button", { name: "Choose file" }).setInputFiles(path.join(__dirname, "testData.json"));
  await expect(page.locator("#fileUploadMsg")).toContainText("File Selected: testData.json");
  await page.waitForTimeout(5000);
  
 
});
