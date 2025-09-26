import { test, expect } from "@playwright/test";

test("Q4 - Find Number of Links on the page ", async ({ page }) => {
  // open the url

//   await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

// await page.goto("https://www.amazon.in/");

  // Select all elements with a certain selector
  // //a should match multiple elements
  const linkWebElements = await page.$$("//a");

  console.log("Found " + linkWebElements.length + +" " + "linkWebElements");

  for (const element of linkWebElements) {
    const text = await element.textContent();
    console.log("Element: " + text);
  }
});
