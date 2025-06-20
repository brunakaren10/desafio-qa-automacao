
import { test, expect, request,APIRequestContext} from '@playwright/test';
import { allure } from 'allure-playwright';


test.describe('API - User', () => {
  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({
      baseURL: 'https://reqres.in/api/', 
    });
  });
  test.afterAll(async () => {
    await apiContext.dispose();
  });


  test('GET /users/2 - deve retornar usuário com sucesso', async () => {
    const response = await apiContext.get('users/2');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body.data).toHaveProperty('id', 2);
    expect(body.data).toHaveProperty('email');
  });


  test('GET/users/23 - usuário inexistente (negativo)', async () => {
    const response = await apiContext.get('/users/23');

    expect(response.status()).toBe(404);
  });
});
