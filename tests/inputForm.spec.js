const { test, expect } = require('@playwright/test');

test('Input Form Submit Validation', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("text=Input Form Submit");

  await page.getByRole('button', { name: 'Submit' }).click();
  const validationMessage = await page.locator('#name').evaluate(el => el.validationMessage);
  expect(validationMessage).toBe("Please fill out this field.");

  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@test.com');
  await page.fill('#password', 'Password123');
  await page.fill('#company', 'LambdaTest');
  await page.fill('#website', 'https://example.com');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.fill('#city', 'New York');
  await page.fill('#address1', 'Street 1');
  await page.fill('#address2', 'Street 2');
  await page.fill('#state', 'NY');
  await page.fill('#zip', '10001');

  await page.click("button[type='submit']");

  await expect(page.locator('.success-msg'))
    .toHaveText('Thanks for contacting us, we will get back to you shortly.');
});
