import { test, expect } from './fixtures';

test.describe('Automation Exercise Suite', () => {
  
  test.beforeEach(async ({ page, homePage }) => {
    // Block Ads to make it stable
    await page.route('**/*google-analytics*', route => route.abort());
    await page.route('**/*doubleclick*', route => route.abort());
    await homePage.navigate();
  });

  test('Test 1 — Product Search', async ({ homePage, productsPage }) => {
    await homePage.clickProducts();
    await productsPage.searchProduct('Dress');
    
    const names = await productsPage.getVisibleProductNames();
    expect(names.length).toBeGreaterThan(0);
    
    for (const name of names) {
      expect(name.toLowerCase()).toContain('dress');
    }
  });

  test('Test 2 — Add to Cart', async ({ page, homePage, productsPage }) => {
    await homePage.clickProducts();
    await productsPage.addProductsToCart(2);
    await homePage.clickCart();

    const cartRows = page.locator('#cart_info_table tbody tr');
    await expect(cartRows).toHaveCount(2);
  });

});
