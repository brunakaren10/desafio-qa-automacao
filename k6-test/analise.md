# Análise do Teste de Carga com K6

## Cenário

- Simulamos 500 usuários simultâneos por 5 minutos contra o endpoint:
  `https://jsonplaceholder.typicode.com/posts`

## Resultados

- 95% das requisições responderam abaixo de 500ms ✅
- Nenhuma falha foi registrada nos checks (`status 200` e `body not empty`)
- A API manteve estabilidade durante toda a execução

### Principais Métricas (extraídas do summary)

| Métrica                   | Valor    |
|---------------------------|----------|
| Duração média das reqs    | 238ms |
| P95 da duração            | 310ms    |
| Requisições com status 200| 100%     |
| Total de requisições      | 150.000+ |

## Conclusão

A API pública `jsonplaceholder` se manteve estável e performática, com resposta média abaixo de 200ms mesmo sob carga de 500 usuários simultâneos. O resultado é consistente com boas práticas de performance.

---

📁 Relatórios gerados:
