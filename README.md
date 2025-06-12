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
 # Estrutura do Projeto
 k6-load-test/ # Scripts e relatorios dos testes de carga com K6
 loadtest.js # Script de teste de carga
 summary.js # Script de geracao de relatorio
 summary.json # Relatorio estruturado gerado automaticamente
 summary.txt # Relatorio legivel em texto
 analise.md # Analise dos resultados do teste de carga
 api-tests/ # Testes automatizados de API
 e2e-tests/ # Testes E2E com Cucumber
 mobile-tests/ # Testes mobile com Appium
 ci-cd/ # Configuracoes de pipelines CI/CD
 reports/ # Relatorios de execucao dos testes
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
 # Analise
A analise completa dos resultados do teste de carga esta documentada no arquivo:
k6-load-test/analise.md
Ela inclui as principais metricas, interpretacao dos resultados e conclusao sobre o desempenho da
API testada (https://jsonplaceholder.typicode.com/posts).
---
 # Status da Entrega
Todas as tarefas do desafio foram concluidas com sucesso:
- [x] Teste de carga com K6
- [x] Analise detalhada dos resultados
- [x] Scripts e relatorios organizados
- [x] Estrutura compativel com CI/CD e automacoes futuras
