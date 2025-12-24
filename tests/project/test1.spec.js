const {test, expect} = require('@playwright/test');

test('basic test', async ({page}) => {
 await page.goto('https://testautomationpractice.blogspot.com/');


    const copy=await page.locator('//button[normalize-space()="Copy Text"]');
    copy.dblclick();
    await page.waitForTimeout(2000);
    await page.frameLocator('#frame-one1434677811').locator('#field2').click();
    await expect(page.locator('#field2')).toHaveValue('Hello World');   
    await page.waitForTimeout(2000);


});