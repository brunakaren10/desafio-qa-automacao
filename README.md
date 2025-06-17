## 📘 Desafio Técnico – QA Automação

Este repositório apresenta a entrega do desafio técnico para a vaga de QA, cobrindo diferentes tipos de testes automatizados, bem como integração contínua com CI/CD.

### ✅ Abrange os seguintes tipos de testes:

* ✅ Testes de **Performance** com **K6**
* ✅ Testes de **API** com **Playwright**
* ✅ Testes **E2E Web** com **Playwright**
* ✅ Testes **Mobile** com **Appium + WebdriverIO**
* ✅ Integração em pipeline **CI/CD com GitHub Actions**

---

## 🏗️ Estrutura do Projeto

```
📁 desafio-qa-automacao/
📂 e2e-api-tests/           → Testes E2E Web e API com Playwright
📂 mobile-tests/            → Testes Mobile com Appium + WebdriverIO
📂 k6-test/                 → Testes de Performance com K6
📂 .github/workflows/       → Pipeline CI/CD (GitHub Actions)
📄 README.md                → Este arquivo
```

---

## ⚙️ Arquitetura e Organização

O projeto foi separado por tipo de teste para facilitar a manutenção e escalabilidade:

* `e2e-api-tests/` contém testes web (UI) e testes de API usando o Playwright.
* `mobile-tests/` contém automações mobile, com suporte para Android.
* `k6-test/` contém testes de carga/performance simulando múltiplos usuários.
* `.github/workflows/` contém pipeline CI/CD que roda testes automaticamente em push/pull request.

---

## 🚀 Como Executar os Testes

### 🔹 Requisitos Globais

* **Node.js** `18+`: [Instalar](https://nodejs.org)
* **Appium + Android Studio** (para testes mobile): [Instalar](https://appium.io)
* **K6** (para performance): [Instalar](https://k6.io/docs/getting-started/installation/)

---

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/brunakaren10/desafio-qa-automacao.git
cd desafio-qa-automacao
npm install
```

---

### 2️⃣ Testes de Performance com K6

```bash
cd k6-test
k6 run --summary-export=k6-load-test/summary.json k6-load-test/loadtest.js
```

#### Relatórios Gerados:

* `summary.json`: Dados brutos
* `summary.txt`: Sumário legível

---

### 3️⃣ Testes API & E2E com Playwright

```bash
cd e2e-api-tests
npm install
npx playwright install
npx playwright test --reporter=list,allure-playwright
```

#### Gerar Relatório Allure:

```bash
npx allure generate allure-results --clean
npx allure open
```

---

### 4️⃣ Testes Mobile com Appium + WebdriverIO

⚠️ Certifique-se de que o **emulador Android esteja iniciado** antes de rodar os testes.

```bash
cd mobile-tests
npm install
npx wdio run wdio.conf.js
```

---

## 🔁 Integração CI/CD

* O projeto possui um workflow no GitHub Actions que executa os testes automaticamente a cada push/pull request na branch `main`.
* Arquivo de configuração: `.github/workflows/ci.yml`

---

## 🧪 Dependências Instaladas

* `@playwright/test`
* `allure-playwright`
* `k6`
* `webdriverio`
* `appium`
* `@wdio/appium-service`, entre outras.

Para ver todas, consulte os arquivos `package.json` dentro das pastas `e2e-api-tests/` e `mobile-tests/`.

---

