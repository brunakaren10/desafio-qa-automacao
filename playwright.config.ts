import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-tests',
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
})