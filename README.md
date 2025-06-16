# Desafio Técnico – QA Automaçã

Avaliar a estabilidade e performance de uma API pública simulando 500 usuários simultâneos durante 5 minutos.
Desafio Tecnico QA Automacao
Este repositorio contem a entrega do desafio tecnico para a vaga de QA, com foco em:
- Testes automatizados de Carga (K6)
- Testes de API
- Testes End-to-End (E2E) com Cucumber
- Testes Mobile com Appium
- Integracao com CI/CD
---
---
 # Teste de Carga com K6
 Objetivo
Avaliar a estabilidade e performance de uma API publica simulando 500 usuarios simultaneos
durante 5 minutos.
 Como executar o teste
1. Pre-requisitos:
 - Node.js
 - K6 instalado
2. Rodar o teste:
 k6 run --summary-export=k6-load-test/summary.json k6-load-test/loadtest.js
3. Relatorios gerados automaticamente:
 - summary.json Dados brutos
 - summary.txt Sumario legivel
---

 # Status da Entrega
Todas as tarefas do desafio foram concluidas com sucesso:
- [x] Teste de carga com K6
- [x] Analise detalhada dos resultados
- [x] Scripts e relatorios organizados
- [x] Estrutura compativel com CI/CD e automacoes futuras
