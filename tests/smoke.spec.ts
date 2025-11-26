import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');

  
  await expect(
    page.getByRole('heading', { level: 2, name: /frontend developer/i })
  ).toBeVisible();

  console.log(await page.url());
});
