


import {test, expect} from '@playwright/test'


test("Open the browser and record video", async ({page})=>{


await    page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

const inputElement = await page.getByRole('heading', { name: 'Text Input' });

await expect(inputElement).toBeVisible();

await page.waitForTimeout(10000);

});