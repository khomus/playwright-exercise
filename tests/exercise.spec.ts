import { test, expect } from './fixtures';

test.describe('Automation Exercise Suite', () => {
  
  test.beforeEach(async ({ page, homePage }) => {
    // Block Ads to make it stable
    await page.route('**/*google-analytics*', route => route.abort());
    await page.route('**/*doubleclick*', route => route.abort());
    await page.route('**/fundingchoicesmessages.google.com/**', route => route.abort());
    await homePage.navigate();
    await homePage.acceptCookiesIfVisible();
  });

  test('Test 1 — Product Search', async ({ homePage, productsPage }) => {
    await homePage.clickProducts();
    await productsPage.searchProduct('Dress');
    
    // check that headder "SEARCHED PRODUCTS" is visible
    await expect(productsPage.page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    
    const names = await productsPage.getVisibleProductNames();
    expect(names.length).toBeGreaterThan(0);
    
    // Verifying the first result
    const hasDress = names.some(name => name.toLowerCase().includes('dress'));
    expect(hasDress).toBe(true);
  });

  test('Test 2 — Add to Cart', async ({ page, homePage, productsPage }) => {
    await homePage.clickProducts();
    await productsPage.addProductsToCart(2);
    await homePage.clickCart();

    const cartRows = page.locator('#cart_info_table tbody tr');
    await expect(cartRows).toHaveCount(2);
  });

test('Test 3 — Contact Form Submission', async ({ page, homePage, contactPage }) => {
    await homePage.clickContactUs();
    
    await contactPage.fillContactForm({
      name: 'Aliaksej',
      email: 'test@example.com',
      subject: 'Bug Report',
      message: 'Hello, this is a test message.'
    });

    // Waiting for dialog and click simltaneously
    page.once('dialog', dialog => dialog.accept());
    await contactPage.submit();
    
    // Now wait for message
    const success = await contactPage.getSuccessMessageLocator();
    await expect(success).toBeVisible({ timeout: 10000 });
  });
});
