import { test, expect } from '@playwright/test';

test('title is set', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = page.locator('title');
  await expect(title).toHaveText('Trilogy Multiplayer');
});
