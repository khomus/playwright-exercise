import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  private readonly searchInput = this.page.locator('#search_product');
  private readonly searchButton = this.page.locator('#submit_search');
  private readonly productTitles = this.page.locator('.productinfo p');
  private readonly continueShoppingBtn = this.page.getByRole('button', { name: 'Continue Shopping' });

  async searchProduct(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async getVisibleProductNames() {
    // Wait at least one header to become visible
    await this.productTitles.first().waitFor({ state: 'visible' }); 
    return this.productTitles.allInnerTexts();
  }

  async addProductsToCart(count: number) {
    const allProducts = this.page.locator('.productinfo .add-to-cart');
    for (let i = 0; i < count; i++) {
      await allProducts.nth(i).click();
      await this.continueShoppingBtn.click();
    }
  }
}
