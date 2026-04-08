import { BasePage } from './base.page';

export class HomePage extends BasePage {
  private readonly productsLink = this.page.getByRole('link', { name: ' Products' });
  private readonly contactUsLink = this.page.getByRole('link', { name: 'Contact us' });
  private readonly cartLink = this.page.getByRole('link', { name: 'Cart' });

  async clickProducts() {
    await this.productsLink.click();
  }

  async clickContactUs() {
    await this.contactUsLink.click();
  }

  async clickCart() {
    await this.cartLink.click();
  }
}
