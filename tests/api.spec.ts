import { test, expect } from '@playwright/test';

test('GET /posts/1', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('id', 1);
});
