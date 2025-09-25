import { test, expect } from "@playwright/test";

test("TC001 - Alert Handling", async ({ page }) => {
  // open the url

  await page.goto("https://www.automationtesting.co.uk/popups.html");

  // find the alert button

  await page.locator('//button[@onclick="alertTrigger()"]').click();

  page.on("dialog", (dialog) => dialog.accept());

  const element = await page.locator("//h2[text()='Popup & Alerts']");

  await expect(element).toBeVisible();

  await page.waitForTimeout(5000);
});

test.only("TC002 - Alters Demo", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");

  await page.waitForTimeout(2000);
  // Alert with information and Ok button
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);

    dialog.dismiss().catch(() => {});
  });

  // Alert with Ok and Cancel

  await page
    .getByRole("button", { name: "click the button to display" })
    .click();

  await page.getByRole("link", { name: "Alert with OK & Cancel" }).click();

  await page.waitForTimeout(2000);
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);

    dialog.dismiss().catch(() => {});
  });

  // Alert with ading information/text

  await page
    .getByRole("button", { name: "click the button to display a" })
    .click();

  await page.getByRole("link", { name: "Alert with Textbox" }).click();

  await page.waitForTimeout(2000);
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);

    dialog.type("Dnyaneshwar Divekar");

    dialog.dismiss().catch(() => {});
  });

  await page.getByRole("button", { name: "click the button to" }).click();
  //   await expect(page.locator('#demo1')).toContainText('Hello Dnyaneshwar Divekar How are you today');
});
