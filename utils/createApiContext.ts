import { request } from '@playwright/test';

export async function createApiContext() {
  return await request.newContext({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      'x-api-key': process.env.API_TOKEN || '',
      'Content-Type': 'application/json',
    },
  });
}
