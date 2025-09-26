import { test, expect } from "@playwright/test";

test("TC001- File Handling Demo", async ({ page }) => {
  // 1) Open url

  await page.goto("https://the-internet.herokuapp.com/upload");

  // 2) Verify the page heading

  const headingElement = await page.locator("//h3[text()='File Uploader']");
  await expect(headingElement).toBeVisible();
  await expect(headingElement).toContainText("File Uploader");

  await page.waitForTimeout(3000);

  // 3) Click on the Choose File button

  const chooseFileElement = await page.locator('//input[@id="file-upload"]');
  chooseFileElement.click();

  await page.waitForTimeout(3000);
  // 4) Select the required file

  chooseFileElement.setInputFiles("testData.txt");

  // 5) click on the upload button

  await page.waitForTimeout(3000);

  await page.locator('//input[@id="file-submit"]').click();

  // 6) Verify that the file is uploaded successfully

  const successMessage = await page.locator("//h3[text()='File Uploaded!']");

  await expect(successMessage).toHaveText("File Uploaded!");

  await page.waitForTimeout(5000);
});


test.only("TC002 - For file upload ", async ({page})=>{
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');

  await page.getByRole('link', { name: 'File Upload' }).click();

  await page.waitForTimeout(5000);

//   await page.getByRole('button', { name: 'Choose file' }).click();

  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Choose file' }).setInputFiles("test_data/Book1.xlsx");

  await expect(page.locator('#fileUploadMsg')).toContainText('File Selected: TestData.txt');
  await page.waitForTimeout(5000);

});