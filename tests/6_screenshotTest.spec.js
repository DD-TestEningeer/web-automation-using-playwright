


import {test, expect} from '@playwright/test'


test("Open the browser in and capture the screenshot", async ({page})=>{


await    page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

await page.screenshot({ path: 'screenshots/fullscreenScreenshot.png' });

await page.getByRole('heading', { name: 'Text Input' }).screenshot({ path: 'screenshots/elementScreenScreenshot.png' });;

await page.waitForTimeout(5000);

});