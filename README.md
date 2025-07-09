# desafio-cypress-QA
Testes automatizados da aplicação lojaebac.ebaconline.art.br com Cypress

# Testes Automatizados de Login com Cypress

Este projeto contém testes automatizados para validação do fluxo de login de um sistema, utilizando o framework Cypress.

## Dependências e Ferramentas Necessárias

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor (recomendado: versão 14 ou superior).
- **npm**: Gerenciador de pacotes do Node.js.
  - Versão utilizada: 10.9.2
- **Cypress**: Framework de testes end-to-end para aplicações web.
  - Versão utilizada: 14.5.1
- **Mocha**: Framework de testes JavaScript utilizado internamente pelo Cypress para estruturação dos testes.
  - Versão utilizada: 11.7.1
- **cypress-mochawesome-reporter**: Gera relatórios de testes em formato HTML com evidências visuais (screenshots).
  - Versão utilizada: ^4.0.0

## Estrutura dos Arquivos do Projeto

Abaixo estão descritos os principais arquivos e pastas do projeto e suas finalidades:

- **cypress/e2e/login/login.cy.js**: Arquivo que contém todos os cenários de teste automatizados para o fluxo de login.
- **cypress/fixtures/massa-login.json**: Arquivo de massa de dados utilizado nos testes de login, contendo usuários, senhas e mensagens esperadas para cada cenário.
- **cypress/support/commands-login.js**: Arquivo com comandos customizados do Cypress para facilitar a automação do login.
- **cypress/support/e2e.js**: Arquivo de configuração global dos testes, executado antes de cada teste.
- **cypress/reports/**: Pasta onde são gerados os relatórios em HTML após a execução dos testes.
- **cypress/screenshots/**: Pasta onde são salvas automaticamente as evidências visuais (prints) dos testes executados.
- **cypress.config.js**: Arquivo de configuração principal do Cypress, onde são definidos reporter, opções de execução e integração de plugins.
- **package.json**: Arquivo de configuração do projeto Node.js, contendo as dependências, scripts e metadados do projeto.

Esses arquivos e pastas garantem a organização, manutenção e execução eficiente dos testes automatizados do projeto.

### Instalação das Dependências

Execute o comando abaixo na raiz do projeto para instalar todas as dependências:

```bash
npm install
```

## Comandos para Execução dos Testes

- Executar os testes em modo interativo (GUI):
  ```bash
  npx cypress open
  ```
- Executar os testes em modo headless (terminal) e gerar o relatório automaticamente:
  ```bash
  npx cypress run
  ```

## Casos de Teste de Login

Os seguintes cenários foram levantados para o fluxo de login:

1. **Login com sucesso:**  
   Usuário e senha válidos.  
   Esperado: Login realizado com sucesso e mensagem de boas-vindas exibida.

2. **Login com senha inválida:**  
   Usuário válido e senha inválida.  
   Esperado: Exibição de mensagem de erro informando falha na autenticação.

3. **Login com usuário inválido:**  
   Usuário inválido e senha válida.  
   Esperado: Exibição de mensagem de erro informando falha na autenticação.

4. **Login com senha em branco:**  
   Usuário válido e senha em branco.  
   Esperado: Exibição de mensagem de erro informando que a senha é obrigatória.

## Geração de Relatórios

Após a execução dos testes com `npx cypress run`, um relatório em HTML será gerado automaticamente na pasta `cypress/reports/` com o nome `index.html`.  
Abra o arquivo `index.html` para visualizar o resultado detalhado dos testes, incluindo screenshots automáticos dos cenários.
