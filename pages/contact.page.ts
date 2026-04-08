import { BasePage } from './base.page';

export class ContactPage extends BasePage {
  private readonly nameInput = this.page.getByPlaceholder('Name');
  private readonly emailInput = this.page.getByPlaceholder('Email', { exact: true });
  private readonly subjectInput = this.page.getByPlaceholder('Subject');
  private readonly messageInput = this.page.getByPlaceholder('Your Message Here');
  private readonly submitButton = this.page.locator('input[name="submit"]');
  private readonly successMessage = this.page.locator('.status.alert-success');

  async fillContactForm(data: { name: string; email: string; subject: string; message: string }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getSuccessMessageLocator() {
    return this.successMessage;
  }
}
