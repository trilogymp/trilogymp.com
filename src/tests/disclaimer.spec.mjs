import { test, expect } from '@playwright/test';

test('disclaimer is set', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const app = page.locator('#__next');
  await expect(app).toContainText('DISCLAIMER');
});
