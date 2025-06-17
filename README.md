# Desafio Técnico – QA Automação
Este repositório contém a entrega do desafio técnico para a vaga de QA, com foco em:

✅ Testes de Carga com K6

✅ Testes de API com Playwright

✅ Testes End-to-End (E2E) com Playwright

✅ Testes Mobile com Appium + WebdriverIO

✅ Integração com CI/CD (GitHub Actions)

# Estrutura do Projeto
-e2e-api-tests/             # Testes E2E/API com Playwright 
-mobile-tests/              # Testes automatizados Mobile com Appium + WebdriverIO
-k6-test/                   # Testes de performance com K6
-github/workflows/          # Pipeline CI/CD (GitHub Actions)
-README.md                  # Este arquivo


# 1. Como Rodar os Testes
# Node.js (versão recomendada: 18+)
https://nodejs.org

# K6
https://k6.io/docs/getting-started/installation/

# Appium + Android Studio (para testes mobile)
https://appium.io/

# 2. Clonar o Repositório
git clone https://github.com/brunakaren10/desafio-qa-automacao.git
cd desafio-qa-automacao
npm install

# 3. Testes de Performance com K6
cd k6-test
k6 run --summary-export=k6-load-test/summary.json k6-load-test/loadtest.js

Relatórios Gerados:
summary.json: Dados brutos
summary.txt: Sumário legível

# 4. Testes de API/ E2E
cd e2e-api-tests
npm install -D @playwright/test
npx playwright install
npx playwright test --reporter=list,allure-playwright

Relatórios Gerados:
npx allure generate allure-results --clean
npx allure open  

# 5. Testes Mobile com Appium + WebdriverIO
Certifique-se de que o emulador Android está ativo.

cd mobile-tests
npx wdio run wdio.conf.js
