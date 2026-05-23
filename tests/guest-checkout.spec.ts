import { test, expect } from '@playwright/test';

test('guest visitor can find a product, add to cart and reach checkout', async ({ page }) => {
  await page.goto('https://www.shopware6-demo.development-s25.com/');

  const cookieButton = page.getByRole('button', {
    name: /Nur technisch notwendige|Akzeptieren|Accept/i,
  }).first();

  if (await cookieButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieButton.click();
  }

  await expect(page).toHaveURL(/shopware6-demo/);

  // Open category page directly to avoid unstable search result selectors
  await page.goto('https://www.shopware6-demo.development-s25.com/Clothing/');

  await expect(page.locator('body')).toContainText(/Clothing|Women|Men|€|Warenkorb/i);

  // Prefer product container link; fall back to image link if needed.
  const firstProduct = page.locator('.product-box').first();

  await expect(firstProduct).toBeVisible({ timeout: 15000 });
  await firstProduct.click().catch(async () => {
    // If clicking container fails, click the product image link as a fallback
    const firstProductImage = page.locator('.product-image-link').first();
    await expect(firstProductImage).toBeVisible({ timeout: 15000 });
    await firstProductImage.click();
  });

  await expect(page.locator('body')).toContainText(/€|Warenkorb|In den Warenkorb|Add to cart/i);

  const addToCartButton = page.getByRole('button', {
    name: /In den Warenkorb|Add to cart|Warenkorb/i,
  }).first();

  await expect(addToCartButton).toBeVisible({ timeout: 10000 });
  await addToCartButton.click();

  await expect(page.locator('body')).toContainText(/Warenkorb|hinzugefügt|Cart|added/i);

  await page.goto('https://www.shopware6-demo.development-s25.com/checkout/cart');

  await expect(page.locator('body')).toContainText(/Warenkorb|Summe|Cart|Total|Zwischensumme/i);

  const checkoutButton = page.getByRole('link', {
    name: /Zur Kasse|Checkout|Kasse/i,
  }).or(
    page.getByRole('button', {
      name: /Zur Kasse|Checkout|Kasse/i,
    })
  ).first();

  await expect(checkoutButton).toBeVisible({ timeout: 10000 });
  await checkoutButton.click();

  await expect(page).toHaveURL(/checkout|account|register|confirm/);
  await expect(page.locator('body')).toContainText(/Checkout|Gast|Guest|Registrieren|Anmelden|Account/i);
});
