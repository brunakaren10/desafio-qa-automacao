import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';

test('Fluxo completo de checkout com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.isOnPage();
  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  await cartPage.isOnPage();
  await cartPage.checkout();

  await checkoutPage.fillCheckoutInfo('Bruna', 'Carvalho', '12345');
  await checkoutPage.finish();
  await checkoutPage.assertThankYouMessage();
});