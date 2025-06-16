// k6-teste/summary.js
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export function handleSummary(data) {
  return {
    'k6-teste/reports/summary.json': JSON.stringify(data, null, 2),
    'k6-teste/reports/summary.txt': textSummary(data, { indent: ' ', enableColors: false }),
  };
}
