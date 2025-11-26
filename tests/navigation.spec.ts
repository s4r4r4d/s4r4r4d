import { test, expect } from '@playwright/test';

const links = [
  { name: /about/i, path: '/about' },
  { name: /portfolio/i, path: '/portfolio' },
  { name: /blog/i, path: '/more' },
  { name: /contact/i, path: '/contact' },
];

test.describe('Navigation works', () => {
  for (const link of links) {
    test(`navigates to ${link.path}`, async ({ page }) => {
      await page.goto('/');


      await page
      .getByRole('navigation')
      .getByRole('link', { name: link.name })
      .click();

      await expect(page).toHaveURL(new RegExp(`${link.path}$`));
    });
  }
});
