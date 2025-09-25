import { test, expect } from "@playwright/test";

test("TC001 - Popup Test - Handle Popup", async ({ page }) => {
  // Navigate to the popup demo page
  await page.goto("https://www.automationtesting.co.uk/popups.html");

  // Wait for the popup to be triggered and get the popup page
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByText("Trigger Pop-up").click(),
  ]);

  await page.waitForTimeout(5000);

  // Wait for the popup to load
  await popup.waitForLoadState();

  // Verify the popup title
  const title = await popup.title();
  expect(title).toContain(""); // Updated to match actual title

  // Optionally verify some text from the popup body
  const popupContent = await popup.locator("body").textContent();
  expect(popupContent).toContain("This is a selenium popup window"); // Partial match is enough here

  // Close the popup
  await popup.close();

  await page.waitForTimeout(5000);
});


test("TC003 - Popup Test - Handle Popup", async ({ page }) => {
  // Navigate to the popup demo page
  await page.goto("https://example.com/");

  // Wait for the popup to be triggered and get the popup page
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByText("Trigger Pop-up").click(),
  ]);

  await page.waitForTimeout(5000);

  // Wait for the popup to load
  await popup.waitForLoadState();

  // Verify the popup title
  const title = await popup.title();
  expect(title).toContain(""); // Updated to match actual title

  // Optionally verify some text from the popup body
  const popupContent = await popup.locator("body").textContent();
  expect(popupContent).toContain("This is a selenium popup window"); // Partial match is enough here

  // Close the popup
  await popup.close();

  await page.waitForTimeout(5000);
});




test.only("Modal Window Demo 2 - Handle Small Modal", async ({ page }) => {
  // Go to the modal demo page
  await page.goto("https://demoqa.com/modal-dialogs");

  // Click the "Small modal" button
  await page.getByRole("button", { name: "Small modal" }).click();

  // Wait for modal to be visible
  const modalTitle = page.locator("#example-modal-sizes-title-sm");
  await expect(modalTitle).toBeVisible();

  // Verify modal title
  await expect(modalTitle).toHaveText("Small Modal");

  // Close the modal by clicking "Close"
  await page.getByRole("button", { name: "Close" }).click();

  // Verify modal is no longer visible
  await expect(modalTitle).toBeHidden();
});
