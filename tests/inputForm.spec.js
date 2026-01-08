const { test, expect } = require('@playwright/test');

test('Input Form Submit Validation', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("text=Input Form Submit");

  await page.getByRole('button', { name: 'Submit' }).click();
  const validationMessage = await page.locator('#name').evaluate(el => el.validationMessage);
  expect(validationMessage).toBe("Please fill in this field.");

  const password = "Password123";

  await page.fill('#name', 'Abhijit');
  await page.locator("xpath=//input[@id='inputEmail4']").fill('abhi@test.com');
  await page.getByPlaceholder('Password').fill(password)
  await page.fill('#company', 'LambdaTest');
  await page.fill('#websitename', 'https://test.com');
  await page.selectOption('select[name="country"]', { label: 'India' });
  await page.fill('#inputCity', 'Bangalore');
  await page.fill('#inputAddress1', 'Street 1');
  await page.fill('#inputAddress2', 'Street 2');
  await page.fill('#inputState', 'Karnataka');
  await page.fill('#inputZip', '100010');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('.success-msg'))
    .toHaveText('Thanks for contacting us, we will get back to you shortly.');
});
