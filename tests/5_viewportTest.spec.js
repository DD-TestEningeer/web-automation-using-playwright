


import {test, expect} from '@playwright/test'


test("Open the browser in reduced window size ", async ({page})=>{


await    page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

await page.waitForTimeout(5000);



});