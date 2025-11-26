import { test, expect } from '@playwright/test';

const portfolioSubPages = [
  { name: /UI\/UX Design and Development/i, path: '/portfolio/noticeai' },
  { name: /Portfolio Design & Development Designer & Developer/i, path: '/portfolio/design' },
  { name: /Rituals Skincare Brand Website/i, path: '/portfolio/rituals' },
];

test.describe('Portfolio sub-pages work', () => {
  for (const sub of portfolioSubPages) {
    test(`navigates to ${sub.path}`, async ({ page }) => {
      await page.goto('/portfolio');

      await page
        .getByRole('link', { name: sub.name })   
        .click();

      await expect(page).toHaveURL(new RegExp(`${sub.path}$`));
    });
  }
});
