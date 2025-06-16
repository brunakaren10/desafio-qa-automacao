import { test, expect, request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('API - CRUD de Usuário', () => {
  let apiContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL,
      extraHTTPHeaders: {
        'x-api-key': process.env.API_TOKEN || '',
        'Content-Type': 'application/json',
      },
    });
  });

  test('POST /users - criar usuário com sucesso', async () => {
    const response = await apiContext.post('users', {
      data: { name: 'Bruna', job: 'QA' },
    });

    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('POST /users - erro ao enviar payload vazio', async () => {
    const response = await apiContext.post('users', {
      data: {},
    });

    // Mesmo vazio, a API de exemplo retorna 201, então vamos só mostrar o comportamento
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });
  test('GET /users/2 - obter dados do usuário', async () => {
    const response = await apiContext.get('users/2');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body.data).toHaveProperty('id', 2);
    expect(body.data).toHaveProperty('email');
  });

  test('PUT /users/2 - atualizar usuário', async () => {
    const response = await apiContext.put('users/2', {
      data: { name: 'Bruna Atualizada', job: 'QA Senior' },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('name', 'Bruna Atualizada');
    expect(body).toHaveProperty('job', 'QA Senior');
    expect(body).toHaveProperty('updatedAt');
  });

  test('DELETE /users/2 - deletar usuário', async () => {
    const response = await apiContext.delete('users/2');
    expect(response.status()).toBe(204);
  });


});
