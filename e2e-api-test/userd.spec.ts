import { test, expect, request, APIRequestContext } from '@playwright/test';
import dotenv from 'dotenv';
import { allure } from 'allure-playwright';

dotenv.config();

test.describe('API - CRUD de Usuário', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'https://reqres.in/api/',
      extraHTTPHeaders: {
        'x-api-key': 'reqres-free-v1',
        'Content-Type': 'application/json',
      },
    });
  });

  // --- POST positivo ---
  test('POST /users - criar usuário com sucesso', async () => {
    await allure.label('feature', 'Criar usuário');
    await allure.description('Cria um usuário com nome e cargo válidos e verifica se foi criado com sucesso.');

    const response = await apiContext.post('users', {
      data: { name: 'Bruna', job: 'QA' },
    });

    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  // --- POST negativo: payload vazio ---
  test('POST /users - erro ao enviar payload vazio', async () => {
    await allure.label('feature', 'Criar usuário - Payload vazio');
    await allure.description('Tenta criar usuário com payload vazio e verifica comportamento da API.');

    const response = await apiContext.post('users', {
      data: {},
    });

    expect(response.status()).toBe(201); // API fake aceita vazio

    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  // --- POST negativo: payload inválido ---
  test('POST /users - erro com payload inválido', async () => {
    await allure.label('feature', 'Criar usuário - Payload inválido');
    await allure.description('Tenta criar usuário com payload inválido e espera erro ou rejeição.');

    const response = await apiContext.post('users', {
      data: { name: '', job: 12345 }, // name vazio e job inválido
    });

    expect([201, 400, 422]).toContain(response.status());
  });

  // --- GET positivo ---
  test('GET /users/2 - obter dados do usuário', async () => {
    await allure.label('feature', 'Obter usuário');
    await allure.description('Obtém dados do usuário com id 2 e verifica retorno.');

    const response = await apiContext.get('users/2');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body.data).toHaveProperty('id', 2);
    expect(body.data).toHaveProperty('email');
  });

  // --- GET negativo: usuário não encontrado ---
  test('GET /users/999 - usuário não encontrado', async () => {
    await allure.label('feature', 'Obter usuário não existente');
    await allure.description('Tenta obter usuário com id inexistente e verifica resposta 404.');

    const response = await apiContext.get('users/999');
    expect(response.status()).toBe(404);
  });

  // --- GET negativo: id inválido ---
  test('GET /users/abc - id inválido', async () => {
    await allure.label('feature', 'Obter usuário - ID inválido');
    await allure.description('Tenta obter usuário com ID inválido (string) e espera erro.');

    const response = await apiContext.get('users/abc');
    expect([400, 404]).toContain(response.status());
  });

  // --- PUT positivo ---
  test('PUT /users/2 - atualizar usuário', async () => {
    await allure.label('feature', 'Atualizar usuário');
    await allure.description('Atualiza dados do usuário 2 e verifica resposta.');

    const response = await apiContext.put('users/2', {
      data: { name: 'Bruna Atualizada', job: 'QA Senior' },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('name', 'Bruna Atualizada');
    expect(body).toHaveProperty('job', 'QA Senior');
    expect(body).toHaveProperty('updatedAt');
  });

  // --- PUT negativo: payload inválido ---
  test('PUT /users/2 - atualizar com payload inválido', async () => {
    await allure.label('feature', 'Atualizar usuário - Payload inválido');
    await allure.description('Tenta atualizar usuário com dados inválidos e verifica resposta.');

    const response = await apiContext.put('users/2', {
      data: { name: '', job: null },
    });

    expect([200, 400, 422]).toContain(response.status());
  });

  // --- PUT negativo: usuário não existente ---
  test('PUT /users/999 - atualizar usuário inexistente', async () => {
    await allure.label('feature', 'Atualizar usuário inexistente');
    await allure.description('Tenta atualizar usuário que não existe e verifica resposta.');

    const response = await apiContext.put('users/999', {
      data: { name: 'Nome', job: 'Cargo' },
    });

    expect([200, 404]).toContain(response.status());
  });

  // --- DELETE positivo ---
  test('DELETE /users/2 - deletar usuário', async () => {
    await allure.label('feature', 'Deletar usuário');
    await allure.description('Deleta usuário com id 2 e espera sucesso.');

    const response = await apiContext.delete('users/2');
    expect(response.status()).toBe(204);
  });

  // --- DELETE negativo: usuário inexistente ---
  test('DELETE /users/999 - deletar usuário inexistente', async () => {
    await allure.label('feature', 'Deletar usuário não existente');
    await allure.description('Tenta deletar usuário que não existe e verifica resposta.');

    const response = await apiContext.delete('users/999');
    expect([204, 404]).toContain(response.status());
  });
});
