# Projeto de Automação de Testes - CertiQA Academy

Projeto de automação de testes End-to-End (E2E) com **Cypress** para validar os principais fluxos da plataforma CertiQA Academy, da Qazando, incluindo login, cadastro e quizzes das certificações CTFL e CTFL-AT.

## Aplicação

URL: https://certiqa.qazando.com.br/

## Tecnologias

- Cypress 15
- JavaScript
- Node.js e npm

## Estrutura do projeto

```text
.
├── cypress
│   ├── e2e
│   │   ├── cadastro_usuarios.cy.js
│   │   ├── ctfl-at_fase_1.cy.js
│   │   ├── ctfl-at_fase_2.cy.js
│   │   ├── ctfl-at_fase_3.cy.js
│   │   ├── ctfl_fase1.cy.js
│   │   ├── ctfl_fase2.cy.js
│   │   ├── ctfl_fase3.cy.js
│   │   ├── ctfl_fase4.cy.js
│   │   ├── ctfl_fase5.cy.js
│   │   ├── ctfl_fase6.cy.js
│   │   ├── login.cy.js
│   │   └── smoke.cy.js
│   ├── fixtures
│   │   └── arquivos JSON com dados dos quizzes
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── quizActions.js
├── cypress.config.js
├── package.json
└── package-lock.json
```

Os testes `ctfl_fase*.cy.js` cobrem quizzes da certificação CTFL; `ctfl-at_fase_*.cy.js`, os quizzes CTFL-AT. Os dados dos quizzes ficam em `cypress/fixtures`, e as ações reutilizáveis ficam em `cypress/support/quizActions.js`.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/digilmar/qa-certification-cypress.git
cd qa-certification-cypress
npm install
```

## Executando os testes

Abrir o Cypress:

```bash
npm run cy:open
```

Executar todos os testes em modo headless:

```bash
npm run cy:run
```

O comando `npm test` também executa os testes em modo headless.
