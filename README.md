# Conexão Café

Sistema para avaliação sensorial de cafés especiais inspirado na metodologia SCA.

## Aluno

Igor

## Turma

Desenvolvimento Front-end

## Tecnologias utilizadas

- Vue 3
- Vue Router
- Vite
- JavaScript
- CSS

## Como executar

```bash
npm install
npm run dev
```

## Funcionalidades implementadas

- Home com indicadores do campeonato
- Cadastro de avaliações com cálculo automático da média
- Listagem dos cafés avaliados
- Ranking ordenado por nota
- Página de detalhes de cada café
- Página 404 para rotas inexistentes

## Conceitos Vue.js aplicados

| Conceito    | Onde foi utilizado                         |
| ----------- | ------------------------------------------ |
| v-for       | Listagem dos cafés e ranking               |
| v-if        | Mensagens condicionais e estados vazios    |
| Props       | CoffeeCard e LeaderboardTable recebem dados |
| Router      | Navegação entre Home, Avaliações, Ranking  |
| Reatividade | Atualização automática da média e dados    |

## Prints das telas

### Home
![Home](./prints/home.png)

### Avaliações
![Avaliações](./prints/avaliacoes.png)

### Ranking
![Ranking](./prints/ranking.png)

### Detalhes do Café
![Detalhes](./prints/detalhes.png)
