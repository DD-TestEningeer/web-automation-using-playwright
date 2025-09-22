import { test, expect } from "@playwright/test";

test.only("Locators Demo Test", async ({ page }) => {
  /* These are the recommended built-in locators.

    1) page.getByRole() to locate by explicit and implicit accessibility attributes.
    2) page.getByText() to locate by text content.
    3) page.getByLabel() to locate a form control by associated label's text.
    4) page.getByPlaceholder() to locate an input by placeholder.
    5) page.getByAltText() to locate an element, usually image, by its text alternative.
    6) page.getByTitle() to locate an element by its title attribute.
    7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

  */

  // open the page
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");

  // 1) page.getByRole() to locate by explicit and implicit accessibility attributes.

  const submitButton = await page.getByRole("button", { name: "Submit" }); // full text

  await submitButton.click();

  // 2) page.getByText() to locate by text content.

  const headerElement = await page.getByText("Add User");
  await expect(headerElement).toBeVisible();

  // 3) page.getByLabel() to locate a form control by associated label's text.

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const passwordLabel = await page.getByLabel("Password");

  // <input type="email" placeholder="name@example.com" />

  // 4) page.getByPlaceholder() to locate an input by placeholder.

  const emailElement = await page.getByPlaceholder("name@example.com");

  //  5) page.getByAltText() to locate an element, usually image, by its text alternative.

  //<img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />

  const imageElement = await page.getByAltText("playwright logo");

  // 6) page.getByTitle() to locate an element by its title attribute.

  // <span title='Issues count'>25 issues</span>

  const spanElement = await page.getByTitle("Issues count");

  //     7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

  // <button data-testid="directions">Itinéraire</button>

  const buttonEl = await page.getByTestId("directions");

  // Css selectors

  // 1) by ID

  // <button id = "button" > Submit </button>

  await page.locator("css=button").click();

  await page.locator("#button").click();

  // 2) by Class

  // <button class = "btn" > Submit </button>

  await page.locator("css=btn").click();

  await page.locator(".btn").click();

  // Xpath Selectors

  await page.locator("xpath=//button").click();

  await page.waitForTimeout(5000);
});
