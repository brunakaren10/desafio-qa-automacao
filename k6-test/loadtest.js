
import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 500 },
    { duration: '3m', target: 500 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');

  // Evita erro se a resposta for undefined ou inválida
  if (res && res.body) {
    check(res, {
      'status is 200': (r) => r.status === 200,
      'body is not empty': (r) => r.body.length > 0,
    });
  } else {
    console.warn('Resposta inválida ou vazia:', res.status);
  }

  sleep(1);
}
