const { test, expect } = require('@playwright/test');

test('Drag slider to 95', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("text=Drag & Drop Sliders");

  const slider = page.locator("input[value='15']");
  await slider.fill('95');

  await expect(page.locator('#rangeSuccess')).toHaveText('95');
});
