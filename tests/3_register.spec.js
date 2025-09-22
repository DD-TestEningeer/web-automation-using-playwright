import { test, expect } from "@playwright/test";

test.only("Verify the register valid scenario", async ({ page }) => {
  // open the page
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/login");

  await page.waitForTimeout(2000);
  // click on the Sign up button

  const SignupButton = await page.locator("#signup");
  SignupButton.click();

  await page.waitForTimeout(2000);
  // Verify that user navigated to add user url

  await expect(page).toHaveURL(
    "https://thinking-tester-contact-list.herokuapp.com/addUser"
  );

  await page.waitForTimeout(2000);
  // Verify if the header text is visible

  const headerText = await page.getByText("Add User");
  await expect(headerText).toContainText("Add User");

  await page.waitForTimeout(2000);
  // Input the First Name into the textbox

  const firstNameInput = await page.getByPlaceholder("First Name");

  await firstNameInput.fill("Demo");

  await page.waitForTimeout(2000);
  // Input the Last Name into the textbox

  const lastNameInput = await page.locator("#lastName");

  await lastNameInput.fill("User");

  await page.waitForTimeout(2000);
  // Input the email into the textbox

  const emailInput = await page.locator("//input[@id='email']");

  await emailInput.fill("demouser2@gmail.com");

  await page.waitForTimeout(2000);
  // Input the password into the textbox

  const passwordInput = await page.locator("//input[@type='password']");

  await passwordInput.fill("Test@123");

  await page.waitForTimeout(2000);
  // Click on the submit button

  const submitBtn = await page.getByRole("button", { name: "Submit" });

  await submitBtn.click();

  await page.waitForTimeout(2000);

  // url validation

  await expect(page).toHaveURL(
    "https://thinking-tester-contact-list.herokuapp.com/contactList"
  );

  await page.waitForTimeout(2000);
  // Click on logout button

  const logoutBtn = await page.locator(".logout");

  await logoutBtn.click();

  // verify that the user is navigated to home url

  await expect(page).toHaveURL(
    "https://thinking-tester-contact-list.herokuapp.com/"
  );

  await page.waitForTimeout(2000);
});
