import { expect } from '@playwright/test';
export class CheckoutPage {
    constructor(private page) {}
  
    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
      await this.page.fill('#first-name', firstName);
      await this.page.fill('#last-name', lastName);
      await this.page.fill('#postal-code', postalCode);
      await this.page.click('#continue');
    }
  
    async finish() {
      await this.page.click('#finish');
    }
  
    async assertThankYouMessage() {
      await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
    }
  }