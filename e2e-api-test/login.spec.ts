import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { step } from 'allure-js-commons';

test('Deve realizar login e exibir produtos disponíveis', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await step('Navegar para a página de login', async () => {
    await loginPage.goto();
  });

  await step('Fazer login com usuário válido', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
  });

  await step('Verificar se está na página de inventário', async () => {
    await inventoryPage.isOnPage();
  });

  await step('Verificar se há produtos disponíveis', async () => {
    const items = await page.$$('.inventory_item');
    expect(items.length).toBeGreaterThan(0);
  });
});