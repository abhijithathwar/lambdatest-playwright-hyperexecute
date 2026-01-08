const { test, expect } = require('@playwright/test');

test('Simple Form Demo Validation', async ({ page }) => {
  const message = "Welcome to LambdaTest";

  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("text=Simple Form Demo");

  await expect(page).toHaveURL(/simple-form-demo/);

  await page.getByPlaceholder('Please enter your message').fill(message)
  await page.locator('#showInput').click();

  const displayed = await page.locator('#message').textContent();
  expect(displayed).toBe(message);
});
